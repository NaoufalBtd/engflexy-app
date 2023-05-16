import { Box, Input, Text } from "native-base";
import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { QnCategory, QuestionStatus } from "../../../../constants/Quiz";
import { useAppDispatch } from "../../../../hooks/stateHooks";
// import { changeQuestionStatus as homeworkChangeQnStatus } from "../../../../store/reducers/homeworkReducer";
import { changeQuestionStatus as practiceChangeQnStatus } from "../../../../store/reducers/lessonQuizReducer";
import { useAppTheme } from "../../../../theme";
import { QnTemplateProp } from "../../../../types/components/QnTemplateProp";
import { generateUniqueId } from "../../../../utils/textUtils";
import { alpha, quizAnswerFeedbackColor } from "../../../../utils/uiUtils";

type Answers = {
  [key: string]: string;
};

type FocusedInputs = {
  [key: string]: boolean;
};

const FillBlankQuiz: React.FC<QnTemplateProp> = ({
  question,
  responses,
  questionStatus,
  answerSubmitted,
}) => {
  const [answers, setAnswers] = useState<Answers>({});
  const [focusedInputs, setFocusedInputs] = useState<FocusedInputs>({});
  const dispatch = useAppDispatch();
  const { colors } = useAppTheme();

  const changeQnStatusAction =
    question.category === QnCategory.homework
      ? practiceChangeQnStatus
      : practiceChangeQnStatus; //todo: change this to homeworkChangeQnStatus
  const borderColor = quizAnswerFeedbackColor(
    questionStatus,
    answerSubmitted,
    colors
  );

  const handleFocus = (inputKey: string) => {
    setFocusedInputs({
      ...focusedInputs,
      [inputKey]: true,
    });
  };

  const handleBlur = (inputKey: string) => {
    setFocusedInputs({
      ...focusedInputs,
      [inputKey]: false,
    });
  };

  const getCorrectAnswer = () => {
    if (responses.length > 0) {
      return responses[0].label;
    }
    return "";
  };

  const handleAnswerChange = (inputKey: string, text: string) => {
    setAnswers((prevState) => ({ ...prevState, [inputKey]: text }));
    //!this business logic is handle only the case of one correct answer
    let qnStatus = QuestionStatus.NotAnswered;
    if (text && responses.length === 1) {
      const correctAnswer = getCorrectAnswer();
      if (text.toLowerCase() === correctAnswer.toLowerCase()) {
        qnStatus = QuestionStatus.AnsweredCorrectly;
      } else {
        qnStatus = QuestionStatus.AnsweredIncorrectly;
      }
    }
    dispatch(changeQnStatusAction(qnStatus));
  };

  const renderText = (text: string) => {
    const regex = /@(.*?)@/g; // split on @placeholder@
    const parts = text.split(regex);

    return parts.map((part, index) => {
      const isPlaceholder = index % 2 === 1; // odd indexes are placeholders

      return isPlaceholder ? (
        <TouchableWithoutFeedback
          key={index}
          onFocus={() => handleFocus(part)}
          onBlur={() => handleBlur(part)}>
          <Box style={styles.inputContainer}>
            <Input
              borderColor={borderColor}
              borderStyle={answerSubmitted ? "solid" : "dashed"}
              bg={answerSubmitted ? alpha(borderColor, 0.4) : null}
              style={[styles.input]}
              value={
                focusedInputs[part] || answers[part]
                  ? answers[part]
                  : answerSubmitted
                  ? ""
                  : part
              }
              onChangeText={(text) => handleAnswerChange(part, text)}
            />
          </Box>
        </TouchableWithoutFeedback>
      ) : (
        part.split(" ").map((word, index) => (
          <Text key={generateUniqueId()} color={"text.100"} fontSize={"lg"}>
            {word}{" "}
          </Text>
        ))
      );
    });
  };

  return (
    <>
      <Box p={2} bg={"background.level2"} rounded={"lg"}>
        <Box flexDir="row" alignItems={"center"} my={3} flexWrap={"wrap"}>
          {renderText(question.label)}
        </Box>
      </Box>
      {answerSubmitted &&
        questionStatus !== QuestionStatus.AnsweredCorrectly && (
          <Box
            bgColor={alpha(colors.background.level2, 0.4)}
            w={"full"}
            borderBottomRadius={"3xl"}>
            <Box
              py={2}
              px={1}
              mx={"auto"}
              alignItems={"center"}
              flexDir={"row"}>
              <Text color={"text.100"} fontSize={"lg"}>
                The correct answer is:{" "}
                <Text color={"success.400"}> {getCorrectAnswer()}</Text>
              </Text>
            </Box>
          </Box>
        )}
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    minWidth: 70,
    width: 70,
    // height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderRadius: 4,
    // paddingHorizontal: 2,
    textAlign: "center",
    fontStyle: "italic",
  },
});

export default FillBlankQuiz;

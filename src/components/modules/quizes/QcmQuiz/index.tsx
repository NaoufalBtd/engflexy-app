import { Box, Checkbox, Text } from "native-base";
import React, { useState } from "react";
import { QuestionStatus } from "../../../../constants/Quiz";
import { useAppDispatch } from "../../../../hooks/stateHooks";
import { changeQuestionStatus } from "../../../../store/reducers/lessonQuizReducer";
import { useAppTheme } from "../../../../theme";
import { QnResponse } from "../../../../types/models/QnResponseModel";
import { Question } from "../../../../types/models/QuestionModel";
import { generateUniqueId } from "../../../../utils/textUtils";
import {
  alpha,
  getQcmCheckboxColor,
  quizAnswerFeedbackColor,
} from "../../../../utils/uiUtils";
import Listen from "../../../elements/Listen";

interface indexProps {
  question: Question;
  responses: QnResponse[];
  questionStatus: QuestionStatus;
  answerSubmitted: boolean;
}

const QcmQuiz: React.FC<indexProps> = ({
  question,
  responses,
  answerSubmitted,
  questionStatus,
}) => {
  const [answersIds, setAnswersIds] = useState<number[]>([]); //ids of the selected answers
  const { colors } = useAppTheme();
  const dispatch = useAppDispatch();

  const borderColor = quizAnswerFeedbackColor(
    questionStatus,
    answerSubmitted,
    colors
  );

  const handleAnswersChange = (isChecked: boolean, responseId: number) => {
    isChecked ? setAnswersIds([responseId]) : setAnswersIds([]);

    const isCorrect = responses.find((res) => res.id === responseId)?.isCorrect;
    let qnStatus: QuestionStatus;
    if (!isChecked) {
      qnStatus = QuestionStatus.NotAnswered;
    } else if (isCorrect) {
      qnStatus = QuestionStatus.AnsweredCorrectly;
    } else {
      qnStatus = QuestionStatus.AnsweredIncorrectly;
    }

    dispatch(changeQuestionStatus(qnStatus));
  };

  const renderText = (text: string) => {
    const regExp = new RegExp("\\.{5}?", "g"); // match the placeholder with 5 dots in a row
    const parts = text.split(regExp);
    const answer = answersIds.length
      ? responses.find((res) => res.id === answersIds[0])?.label
      : "";

    if (parts.length > 1) {
      return (
        <Box px={2} flexDir={"row"} alignItems={"center"} flexWrap={"wrap"}>
          {parts[0].split(" ").map((word) => (
            <Text key={generateUniqueId()} fontSize={"md"}>
              {word}{" "}
            </Text>
          ))}

          <Box
            borderWidth={2}
            borderStyle={answerSubmitted ? "solid" : "dashed"}
            borderColor={borderColor}
            borderRadius={"md"}
            p="1"
            px="3"
            mx="2">
            <Text
              textAlign={"center"}
              color={borderColor}
              minW={10}
              fontSize={"md"}>
              {answer}
            </Text>
          </Box>
          {parts[1].split(" ").map((word) => (
            <Text key={generateUniqueId()} fontSize={"md"}>
              {word}{" "}
            </Text>
          ))}
        </Box>
      );
    }
    return <Text>{text}</Text>;
  };

  return (
    <Box>
      <Box flexDir={"row"} alignItems={"center"} my={3}>
        <Listen bordered word={question.label} />
        {renderText(question.label)}
      </Box>

      <>
        {responses.map((response) => {
          const answerColor = getQcmCheckboxColor(answersIds, response, colors);
          const innerBoxBgColor = alpha(answerColor, 0.4);
          return (
            <Box
              key={generateUniqueId()}
              bgColor={"background.level2"}
              w="95%"
              my="1"
              margin={"auto"}
              borderRadius={"lg"}>
              <Box
                p="5"
                borderRadius={"lg"}
                w={"full"}
                borderColor={answerColor}
                borderWidth={answerSubmitted ? 1 : 0}
                bgColor={answerSubmitted ? innerBoxBgColor : undefined}>
                <Checkbox
                  onChange={(value) => {
                    handleAnswersChange(value, response.id);
                  }}
                  isChecked={answersIds.includes(response.id)}
                  colorScheme={"green"}
                  value={response.id.toString()}
                  isDisabled={answerSubmitted}>
                  <Text fontSize={"lg"}>{response.label}</Text>
                </Checkbox>
              </Box>
            </Box>
          );
        })}
      </>
    </Box>
  );
};

export default QcmQuiz;

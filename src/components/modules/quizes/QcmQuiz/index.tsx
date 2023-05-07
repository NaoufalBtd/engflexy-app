import _ from "lodash";
import { Box, Checkbox, Text, Tooltip } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { QuestionStatus } from "../../../../constants/Quiz";
import { useAppDispatch, useAppSelector } from "../../../../hooks/stateHooks";
import { changeResponse } from "../../../../store/reducers/quizReducer";
import { QnResponses } from "../../../../types/models/QnResponseModel";
import { Question } from "../../../../types/models/QuestionModel";
import {
  alpha,
  getQcmCheckboxColor,
  quizAnswerFeedbackColor,
} from "../../../../utils/uiUtils";
import Listen from "../../../elements/Listen";

interface indexProps {
  question: Question;
  answers: QnResponses;
}

const QcmQuiz: React.FC<indexProps> = ({ question, answers }) => {
  const [answerValues, setAnswerValues] = useState<string[]>([]);
  const { currQuestionStatus, responses } = useAppSelector(
    (state) => state.quiz
  );
  const dispatch = useAppDispatch();
  const borderColor = quizAnswerFeedbackColor(currQuestionStatus);
  const solutionShowed = _.includes(
    [QuestionStatus.NotAnswered, QuestionStatus.InProgress],
    currQuestionStatus
  );
  console.log("solution hidden", currQuestionStatus);

  const getCorrectAnswer = () => {
    if (responses) {
      const correctAnswerId = responses.correctAnswersIds[0];
      const correctAnswer = responses.byId[correctAnswerId];
      return correctAnswer.label;
    }
    return "";
  };

  const handleAnswersChange = (values: string[]) => {
    setAnswerValues(values);
    const vals = _.map(values, (v) => parseInt(v));
    dispatch(changeResponse(vals));
  };

  const renderText = (text: string) => {
    const regExp = new RegExp("\\.{5}?", "g"); // match the placeholder with 5 dots in a row
    const parts = text.split(regExp);

    if (parts.length > 1) {
      return (
        <Box px={2} flexDir={"row"} alignItems={"center"} flexWrap={"wrap"}>
          {parts[0].split(" ").map((word) => (
            <Text key={word} fontSize={"md"}>
              {word}{" "}
            </Text>
          ))}
          <Tooltip
            placement="top"
            label={getCorrectAnswer()}
            isOpen={solutionShowed}>
            <Box
              borderWidth={2}
              borderStyle={solutionShowed ? "solid" : "dashed"}
              borderColor={borderColor}
              borderRadius={"md"}
              p="1"
              px="3"
              mx="2">
              <Text color={"lightText"} fontSize={"md"}>
                Placeholder
              </Text>
            </Box>
          </Tooltip>
          {parts[1].split(" ").map((word) => (
            <Text key={word} fontSize={"md"}>
              {word}{" "}
            </Text>
          ))}
        </Box>
      );
    }
    return <Text>{text}</Text>;
  };

  function getQcmAnswerBorderColor(
    id: number,
    correctAnswersIds: number[] | undefined,
    answerValues: string[]
  ): import("native-base/lib/typescript/components/types").ColorType {
    throw new Error("Function not implemented.");
  }

  return (
    <Box>
      <Box flexDir={"row"} alignItems={"center"} my={3}>
        <Listen bordered />
        {renderText(question.label)}
      </Box>
      {/*
      <HStack space={3}>
        {answers.map((answer) => (
          <TouchableOpacity onPress={}  key={answer.answerText}>
            <Box
              px={5}
              py={3}
              borderRadius={"lg"}
              bgColor={"background.level1"}>
              <Text>{answer.answerText}</Text>
            </Box>
          </TouchableOpacity>
        ))}
      </HStack> */}
      <Checkbox.Group onChange={handleAnswersChange} value={answerValues}>
        {_.values(answers.byId).map((answer) => {
          const answerColor = getQcmCheckboxColor(
            answer.id,
            responses?.correctAnswersIds || [],
            answerValues
          );
          const innerBoxBgColor = alpha(answerColor, 0.4);
          return (
            <Box
              key={answer.label}
              bgColor={"background.level1"}
              p="5"
              w="95%"
              my="1"
              margin={"auto"}
              borderRadius={"lg"}>
              <Box
                h={"full"}
                w={"full"}
                borderColor={answerColor}
                borderWidth={1}
                bgColor={innerBoxBgColor}>
                <Checkbox
                  colorScheme={"green"}
                  value={answer.id.toString()}
                  isDisabled={solutionShowed}>
                  <Text fontSize={"lg"}>{answer.label}</Text>
                </Checkbox>
              </Box>
            </Box>
          );
        })}
      </Checkbox.Group>
    </Box>
  );
};

export default QcmQuiz;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginVertical: 4,
  },
});

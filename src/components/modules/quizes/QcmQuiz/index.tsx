import _ from "lodash";
import { Box, Checkbox, Text } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useAppDispatch } from "../../../../hooks/stateHooks";
import { changeResponse } from "../../../../store/reducers/quizReducer";
import { QnResponses } from "../../../../types/models/QnResponseModel";
import { Question } from "../../../../types/models/QuestionModel";
import Listen from "../../../elements/Listen";

interface indexProps {
  question: Question;
  answers: QnResponses;
}

const QcmQuiz: React.FC<indexProps> = ({ question, answers }) => {
  const [groupValues, setGroupValues] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  const questionText = "This is a ..... questionas";

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
          <Box
            borderWidth={2}
            borderStyle={"dashed"}
            borderColor={"white"}
            borderRadius={"md"}
            p="1"
            px="3"
            mx="2">
            <Text color={"lightText"} fontSize={"md"}>
              Placeholder
            </Text>
          </Box>
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

  const handleAnswersChange = (values: string[]) => {
    setGroupValues(values);
    dispatch(changeResponse(values));
  };

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
      <Checkbox.Group onChange={handleAnswersChange} value={groupValues}>
        {_.values(answers.byId).map((answer) => (
          <Box
            key={answer.label}
            bgColor={"background.level1"}
            p="5"
            w="95%"
            my="1"
            margin={"auto"}
            borderRadius={"lg"}>
            <Checkbox colorScheme={"green"} value={answer.label}>
              <Text fontSize={"lg"}>{answer.label}</Text>
            </Checkbox>
          </Box>
        ))}
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

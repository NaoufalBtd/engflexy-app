import { Box, Checkbox, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import Listen from "../../../elements/Listen";

interface indexProps {
  question: {
    questionText: string;
  };
  answers: {
    answerText: string;
    isCorrect: boolean;
  }[];
}

const QcmQuiz: React.FC<indexProps> = ({ question, answers }) => {
  const questionText = "This is a [placeholder] question";
  // const [selectedAnswers, setSelectedAnswers] = React.useState<string[]>([]);
  const [groupValues, setGroupValues] = React.useState<string[]>([]);
  console.log("selectedAnswers", groupValues);

  const renderText = (text: string) => {
    //match the placeholder with regExp
    const regExp = new RegExp("\\[(.*?)]", "g");
    const parts = text.split(regExp);

    if (parts.length > 1) {
      return (
        <>
          <Text style={styles.text}>{parts[0]}</Text>
          <Box
            borderWidth={2}
            borderStyle={"dashed"}
            borderColor={"white"}
            borderRadius={"md"}
            p="1"
            px="3"
            mx="2">
            <Text fontSize={"md"}>{parts[1]}</Text>
          </Box>
          <Text style={styles.text}> {parts[2]}</Text>
        </>
      );
    }
    return <Text>{text}</Text>;
  };

  return (
    <Box>
      <Box flexDir={"row"} alignItems={"center"} my={3}>
        <Listen bordered />
        {renderText(questionText)}
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
      <Checkbox.Group onChange={setGroupValues} value={groupValues}>
        {answers.map((answer) => (
          <Box
            key={answer.answerText}
            bgColor={"background.level1"}
            p="5"
            w="95%"
            my="1"
            margin={"auto"}
            borderRadius={"lg"}>
            <Checkbox colorScheme={"green"} value={answer.answerText}>
              <Text fontSize={"lg"}>{answer.answerText}</Text>
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
  },
});

import { FontAwesome } from "@expo/vector-icons";
import { Box, Button, HStack, Icon, Progress, Text, View } from "native-base";
import React from "react";
import { QuestionStatus } from "../../constants/Quiz";
import { calculatePercentage } from "../../utils";

interface QuizLayoutProps {
  children: React.ReactNode;
  qnNumbers: number;
  currQnNumber: number;
  questionStatus: QuestionStatus;
  answerSubmitted?: boolean;
  onAnswerSubmit?: () => void;
  onPressNext?: () => void;
}

const QuizLayout: React.FC<QuizLayoutProps> = ({
  children,
  qnNumbers,
  currQnNumber,
  questionStatus,
  answerSubmitted,
  onAnswerSubmit,
  onPressNext,
}) => {
  const per = calculatePercentage(currQnNumber, qnNumbers);

  const isLastQn = currQnNumber === qnNumbers;

  return (
    <View
      pt={5}
      display={"flex"}
      flex={1}
      height={"full"}
      bgColor={"background.surface"}>
      <Box
        flexDir={"row"}
        alignItems={"center"}
        px={3}
        mt={1}
        mb={3}
        justifyContent={"space-between"}>
        <Box flex={1} />
        <Progress value={per} w={"3/5"} />
        <Box flex={1} />
        <Box bgColor={"brand.primary"} p="3" borderRadius={"lg"} shadow={7}>
          <Text fontSize={"md"}>
            {currQnNumber}/{qnNumbers}
          </Text>
        </Box>
      </Box>
      <Box
        flex={1}
        borderRadius={"3xl"}
        bgColor={"background.level1"}
        height={"80%"}
        width={"95%"}
        position={"relative"}
        mx={"auto"}
        p="5">
        <Box>{children}</Box>
      </Box>
      <Box py="2">
        {answerSubmitted && isLastQn && (
          <Button>
            <Text>Finish</Text>
          </Button>
        )}
        {answerSubmitted && !isLastQn && (
          <Button variant={"subtle"} onPress={onPressNext}>
            <Text>Next</Text>
          </Button>
        )}

        {!answerSubmitted && questionStatus === QuestionStatus.NotAnswered && (
          <Button onPress={onAnswerSubmit}>
            <HStack space={2}>
              <Text>DONT'T KNOW</Text>
              <Icon as={FontAwesome} name={"question"} ml={2} />
            </HStack>
          </Button>
        )}

        {!answerSubmitted && questionStatus !== QuestionStatus.NotAnswered && (
          <Button onPress={onAnswerSubmit}>
            <HStack space={2}>
              <Text>Check Answer</Text>
              <Icon
                as={FontAwesome}
                name={"check"}
                size={"md"}
                color={"white"}
              />
            </HStack>
          </Button>
        )}
      </Box>
    </View>
  );
};

export default QuizLayout;

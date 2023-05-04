import { FontAwesome } from "@expo/vector-icons";
import {
  Box,
  Button,
  HStack,
  Icon,
  Progress,
  ScrollView,
  Text,
  View,
} from "native-base";
import React from "react";
import { QuestionStatus } from "../../constants/Quiz";
import { useAppDispatch } from "../../hooks/stateHooks";
import { nextQuestion } from "../../store/reducers/quizReducer";
import { calculatePercentage } from "../../utils";

interface QuizLayoutProps {
  children: React.ReactNode;
  qnNumbers: number;
  currQnNumber: number;
  questionStatus: QuestionStatus;
}

const QuizLayout: React.FC<QuizLayoutProps> = ({
  children,
  qnNumbers,
  currQnNumber,
  questionStatus,
}) => {
  const per = calculatePercentage(currQnNumber, qnNumbers);
  const dispatch = useAppDispatch();

  const handleNext = () => {
    dispatch(nextQuestion());
  };
  const handleSubmit = () => {
    // dispatch(());
  };

  return (
    <View
      pt={5}
      display={"flex"}
      flex={1}
      height={"100%"}
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
        borderRadius={"3xl"}
        bgColor={"background.level2"}
        height={"80%"}
        width={"95%"}
        position={"relative"}
        mx={"auto"}
        p="5">
        <ScrollView>{children}</ScrollView>
      </Box>
      <Box my="4">
        {[
          QuestionStatus.AnsweredCorrectly,
          QuestionStatus.AnsweredIncorrectly,
        ].includes(questionStatus) && (
          <Button variant={"subtle"} onPress={handleSubmit}>
            <Text>Next</Text>
          </Button>
        )}
        {questionStatus === QuestionStatus.NotAnswered && (
          <Button onPress={handleSubmit}>
            <HStack space={2}>
              <Text>DONT'T KNOW</Text>
              <Icon as={FontAwesome} name={"question"} ml={2} />
            </HStack>
          </Button>
        )}
        {questionStatus === QuestionStatus.InProgress && (
          <Button onPress={handleSubmit}>
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

import {
  Box,
  Button,
  HStack,
  Progress,
  ScrollView,
  Text,
  View,
} from "native-base";
import React from "react";
import { useAppDispatch } from "../../hooks/stateHooks";
import { nextQuestion, previousQuestion } from "../../reducers/quizReducer";
import { calculatePercentage } from "../../utils";
import BackButton from "../elements/BackButton";

interface QuizLayoutProps {
  children: React.ReactNode;
  qnNumbers: number;
  currQnNumber: number;
}

const QuizLayout: React.FC<QuizLayoutProps> = ({
  children,
  qnNumbers,
  currQnNumber,
}) => {
  const per = calculatePercentage(currQnNumber, qnNumbers);
  const dispatch = useAppDispatch();

  const handleNext = () => {
    dispatch(nextQuestion());
  };
  const handlePrevious = () => {
    dispatch(previousQuestion());
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
        justifyContent={"space-between"}>
        <BackButton />
        <Progress value={per} w={"3/5"} />
        <Box bgColor={"brand.primary"} p="3" borderRadius={"lg"} shadow={7}>
          {currQnNumber}/{qnNumbers}
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
      <Box mt="4">
        <HStack justifyContent={"center"} space={5}>
          <Button variant={"outline"} onPress={handleNext}>
            <Text>Previous</Text>
          </Button>
          <Button variant={"subtle"} onPress={handlePrevious}>
            <Text>Next</Text>
          </Button>
        </HStack>
      </Box>
    </View>
  );
};

export default QuizLayout;

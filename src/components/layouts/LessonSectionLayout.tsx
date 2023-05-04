import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Box, HStack, Icon, Pressable, ScrollView, Text } from "native-base";
import React from "react";
import { useAppDispatch } from "../../hooks/stateHooks";
import {
  nextLesson,
  previousLesson,
} from "../../store/reducers/lessonsReducer";

interface LessonSectionLayoutProps {
  children: React.ReactNode;
  previous?: {
    title: string;
    onPress: () => void;
  };
  next?: {
    title: string;
    onPress: () => void;
  };
}

const LessonSectionLayout: React.FC<LessonSectionLayoutProps> = ({
  children,
}) => {
  const dispatch = useAppDispatch();
  const handleNext = () => {
    console.log("next");
    dispatch(nextLesson());
  };

  const handlePrevious = () => {
    dispatch(previousLesson());
  };

  return (
    <Box h="full">
      <ScrollView h={"90%"}>{children}</ScrollView>
      <Box flex="1" />
      <HStack
        height={60}
        w={"full"}
        alignItems={"center"}
        justifyItems={"stretch"}
        // justifyItems={"start"}
        // justifyContent={"space-around"}
      >
        <Pressable
          onPress={handlePrevious}
          p={5}
          flex={1}
          flexDir={"row"}
          bgColor={"primary.600"}>
          <Icon
            as={FontAwesome}
            name="arrow-left"
            size={"md"}
            color="white"
            mx="2"
          />
          <Text>Previous</Text>
        </Pressable>
        <Pressable
          p={5}
          justifyContent={"flex-end"}
          flexDir="row"
          flex="1"
          bgColor={"primary.700"}
          onPress={handleNext}>
          <Text>Next</Text>
          <Icon
            as={FontAwesome}
            name="arrow-right"
            size={"md"}
            color="white"
            mx="2"
          />
        </Pressable>
      </HStack>
    </Box>
  );
};

export default LessonSectionLayout;

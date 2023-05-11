import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Box, HStack, Icon, Pressable, ScrollView, Text } from "native-base";
import React from "react";
import { useAppDispatch } from "../../hooks/stateHooks";
import {
  nextChapter,
  previousChapter,
} from "../../store/reducers/lessonReducer";
import { useAppTheme } from "../../theme";
import { alpha } from "../../utils/uiUtils";

interface LessonContainerLayoutProps {
  children: React.ReactNode;
  type?: "lesson" | "homework";
  previous?: {
    title: string;
    action: () => void;
  };
  next?: {
    title: string;
    action: () => void;
  };
}

const LessonContainerLayout: React.FC<LessonContainerLayoutProps> = ({
  children,
  previous,
  next,
  type,
}) => {
  const dispatch = useAppDispatch();
  const { colors } = useAppTheme();
  const handleNext = () => {
    console.log("next");
    const action = type === "lesson" ? nextChapter() : null;
    dispatch(nextChapter());
  };

  const handlePrevious = () => {
    dispatch(previousChapter());
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
          onPress={previous?.action}
          p={5}
          flex={1}
          flexDir={"row"}
          bgColor={alpha(colors.background.level2, 0.9)}>
          {previous && (
            <Icon
              as={FontAwesome}
              name="arrow-left"
              size={"md"}
              color="white"
              mx="2"
            />
          )}
          <Text>{previous?.title}</Text>
        </Pressable>
        <Pressable
          p={5}
          justifyContent={"flex-end"}
          flexDir="row"
          flex="1"
          bgColor={alpha(colors.background.level1, 0.9)}
          onPress={next?.action}>
          <Text>{next?.title}</Text>
          {next && (
            <Icon
              as={FontAwesome}
              name="arrow-right"
              size={"md"}
              color="white"
              mx="2"
            />
          )}
        </Pressable>
      </HStack>
    </Box>
  );
};

export default LessonContainerLayout;

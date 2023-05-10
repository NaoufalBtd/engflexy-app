import { useRouter } from "expo-router";
import { Box, Button, HStack, Heading } from "native-base";
import React from "react";
import { SvgXml } from "react-native-svg";
import Books from "../../../../assets/svg/books.svg";
import { useAppDispatch, useAppSelector } from "../../../hooks/stateHooks";
import { fetchLessonChapters } from "../../../store/thunks/lessonsThunks";

interface LessonCardProps {
  id: number;
}

const LessonCard: React.FC<LessonCardProps> = ({ id }) => {
  const { lessons } = useAppSelector((state) => state.course);
  const lesson = lessons?.byId[id];
  const dispatch = useAppDispatch();
  const handleLessonSelection = () => {
    dispatch(fetchLessonChapters(id.toString()));
    route.push(`/lesson`);
  };
  const route = useRouter();
  return (
    <Box
      flexDir={"row"}
      justifyContent={"space-between"}
      w="full"
      bgColor={"background.level1"}
      borderRadius={"xl"}
      py="4"
      shadow={5}
      px={3}
      alignItems={"center"}>
      <HStack alignItems={"center"} w={"3/5"} space={2} mr={3}>
        <Box bgColor={"brand.secondary"} p="2" borderRadius={"full"}>
          <SvgXml xml={Books} width={40} height={40} />
        </Box>
        <Box w={"70%"}>
          <Heading fontSize={"md"}>{lesson?.label}</Heading>
        </Box>
      </HStack>
      <Button variant={"solid"} onPress={handleLessonSelection}>
        Start Lesson
      </Button>
    </Box>
  );
};

export default LessonCard;

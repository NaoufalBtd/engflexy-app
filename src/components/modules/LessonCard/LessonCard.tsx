import { useRouter } from "expo-router";
import { Box, Button, HStack, Heading } from "native-base";
import React from "react";
import { SvgXml } from "react-native-svg";
import Books from "../../../../assets/svg/books.svg";

interface LessonCardProps {
  title: string;
}

const LessonCard: React.FC<LessonCardProps> = ({ title }) => {
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
          <Heading fontSize={"md"}>{title}</Heading>
        </Box>
      </HStack>
      <Button
        variant={"solid"}
        onPress={() => {
          console.log("clicked");
          route.push("/lesson");
        }}>
        Start Lesson
      </Button>
    </Box>
  );
};

export default LessonCard;

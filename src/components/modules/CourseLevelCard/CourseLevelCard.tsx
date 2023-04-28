import { useRouter } from "expo-router";
import { Box, Heading } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";

interface CourseLevelCardProps {
  svg: string;
  title: string;
  width: number;
  bgColor: string;
}

const CourseLevelCard: React.FC<CourseLevelCardProps> = ({
  svg,
  title,
  width,
  bgColor,
}) => {
  const route = useRouter();
  const handlePress = () => {
    route.push("/lessonsList");
    console.log("pressed");
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Box bgColor={bgColor} mx={2} borderRadius={10} p="3">
        <Box py={3} px={1}>
          <SvgXml xml={svg} width={width - 20} height={100} />
        </Box>
        <Box py={2}>
          <Heading textAlign={"center"}>{title}</Heading>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default CourseLevelCard;

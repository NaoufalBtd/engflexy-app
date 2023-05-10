import { useRouter } from "expo-router";
import { Box, Heading } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { useAppDispatch } from "../../../hooks/stateHooks";
import { fetchLessons } from "../../../store/thunks/lessonsThunks";

interface CourseLevelCardProps {
  svg: string;
  title: string;
  width: number;
  bgColor: string;
  id: number;
}

const CourseLevelCard: React.FC<CourseLevelCardProps> = ({
  svg,
  title,
  width,
  bgColor,
  id,
}) => {
  const route = useRouter();
  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(fetchLessons(id.toString()));
    route.push("/list");
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

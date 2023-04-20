import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Box, HStack, Heading, Icon, Text } from "native-base";
import React from "react";

interface PlanningDisplayBoxProps {
  iconName: string;
  iconColor: string;
  iconBackground: string;
  text: string;
  heading: string;
  isLink?: boolean;
}

const PlanningDisplayBox: React.FC<PlanningDisplayBoxProps> = ({
  iconName,
  iconColor,
  iconBackground,
  text,
  heading,
  isLink,
}) => {
  return (
    <HStack space={4} alignItems={"center"} flexDir={"row"}>
      <Box borderRadius={"xl"} p="5" bgColor={iconBackground}>
        <Icon
          as={FontAwesome}
          textAlign={"center"}
          name={iconName}
          size="lg"
          color={iconColor}
          // color={"white"}
        />
      </Box>
      <Box>
        <Heading fontSize="sm">{heading}</Heading>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          fontWeight={"bold"}
          color={isLink ? "brand.secondary" : "white"}
          textDecoration={isLink ? "underline" : "none"}
          fontSize={"xl"}>
          {text}
        </Text>
      </Box>
    </HStack>
  );
};

export default PlanningDisplayBox;

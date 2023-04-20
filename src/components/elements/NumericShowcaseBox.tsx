import { Box, Heading, Text } from "native-base";
import React from "react";
import { StyleProp } from "react-native";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
// import { StyledProps } from "react-native/Libraries/StyleSheet/";

interface NumericShowcaseBoxProps {
  title: string;
  number: number;
  active?: boolean;
  style?: StyleProp<ViewStyle>;
}

const NumericShowcaseBox: React.FC<NumericShowcaseBoxProps> = ({
  title,
  number,
  active,
  style,
}) => {
  return (
    <Box
      borderRadius="lg"
      py="5"
      px="4"
      shadow={active ? 9 : null}
      bgColor={active ? "brand.secondary" : null}
      style={style || null}>
      <Heading
        color={active ? "white" : null}
        fontWeight="bold"
        fontSize="xl"
        textAlign={"center"}>
        {number}
      </Heading>
      <Text color={active ? "white" : null}>{title}</Text>
    </Box>
  );
};

export default NumericShowcaseBox;

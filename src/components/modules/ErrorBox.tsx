import { Box, Center, Heading, Text } from "native-base";
import React, { useState } from "react";
import { SvgXml } from "react-native-svg";
import { serverDownSvg } from "../../constants/Svg";

interface ErroBoxProps {}

const ErrorBox: React.FC<ErroBoxProps> = () => {
  const [width, setWidth] = useState(0);
  return (
    <Box
      w={"95%"}
      bgColor={"background.level1"}
      rounded={"xl"}
      py="10"
      onLayout={(evt) => setWidth(evt.nativeEvent.layout.width)}>
      <Center>
        <SvgXml xml={serverDownSvg} width={width * 0.7} height={width * 0.7} />
        <Heading>Something Goes Wrong</Heading>
        <Text>Please Try Again Later</Text>
      </Center>
    </Box>
  );
};

export default ErrorBox;

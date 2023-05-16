import { Box, Heading } from "native-base";
import React, { useState } from "react";
import { SvgXml } from "react-native-svg";

interface QuizBaseTemplateProps {
  children: React.ReactNode;
  svg?: string;
  title: string;
}

const QuizBaseTemplate: React.FC<QuizBaseTemplateProps> = ({
  children,
  svg,
  title,
}) => {
  const [width, setWidth] = useState(0);
  return (
    <Box
      onLayout={(e) => {
        setWidth(e.nativeEvent.layout.width);
      }}>
      <Box mb={3}>
        {svg ? <SvgXml xml={svg} width={width} height={150} /> : null}
      </Box>
      <Box mb={4}>
        {/* <Text color={"text.300"} fontSize={"md"}>
          Only One response is correct
        </Text> */}
        <Heading fontSize={"lg"}>{title}</Heading>
      </Box>
      {children}
    </Box>
  );
};

export default QuizBaseTemplate;

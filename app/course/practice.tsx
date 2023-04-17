import { Box, Heading, Progress } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface PracticeProps {}

const Practice: React.FC<PracticeProps> = () => {
  return (
    <SafeAreaView>
      <Box>
        <Heading>Choose the correct alternative</Heading>
        <Box w="3/4" margin="auto">
          <Heading>1/14</Heading>
          <Progress value={10} colorScheme="blue" />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default Practice;

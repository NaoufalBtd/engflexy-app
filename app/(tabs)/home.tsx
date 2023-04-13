import { Box, Heading, Image, Text } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NumericShowcaseBox from "../../src/components/elements/NumericShowcaseBox";
import LessonCard from "../../src/components/modules/LessonCard";
interface homeProps {}

const home: React.FC<homeProps> = () => {
  return (
    <SafeAreaView>
      <Box w="full" px="3" py="9" bgColor="primary.50" borderBottomRadius={55}>
        <Box
          flexDir="row"
          // bgColor="amber.100"
          p={5}
          justifyContent="space-between"
          w="full">
          <Box>
            <Text fontSize="md" color="text.400">
              Avril 28th
            </Text>
            <Box flexDir={"row"} alignItems="center">
              <Text fontSize={"lg"} mr="1">
                Hey,
              </Text>
              <Heading fontSize="lg">Naoufal!</Heading>
            </Box>
          </Box>
          <Box>
            <Image
              source={{
                uri: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png",
              }}
              alt="Alternate Text"
              size="sm"
              borderRadius="lg"
            />
          </Box>
        </Box>
        <Box flexDir="row" justifyContent="space-between" px="5" mt="3">
          <NumericShowcaseBox title="Current" active number={2} />
          <NumericShowcaseBox title="Completed" number={5} />
          <NumericShowcaseBox title="Total" number={7} />
        </Box>
      </Box>
      <Box py="10">
        <LessonCard title="Lesson 1" subtitle="Lorem ipsum dolor sit amet" />
      </Box>
    </SafeAreaView>
  );
};

export default home;

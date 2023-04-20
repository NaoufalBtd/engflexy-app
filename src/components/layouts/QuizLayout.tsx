import {
  Box,
  Button,
  HStack,
  Progress,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "native-base";
import React from "react";
import BackButton from "../elements/BackButton";

interface QuizLayoutProps {
  children: React.ReactNode;
}

const QuizLayout: React.FC<QuizLayoutProps> = ({ children }) => {
  return (
    <View
      pt={5}
      display={"flex"}
      flex={1}
      height={"100%"}
      bgColor={"background.surface"}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        hidden={true}
      />

      <Box
        flexDir={"row"}
        alignItems={"center"}
        px={3}
        justifyContent={"space-between"}>
        <BackButton />
        <Progress value={60} w={"3/5"} />
        <Box bgColor={"brand.primary"} p="3" borderRadius={"lg"} shadow={7}>
          3/20
        </Box>
      </Box>
      <Box
        borderRadius={"3xl"}
        bgColor={"background.level2"}
        height={"80%"}
        width={"95%"}
        position={"relative"}
        mx={"auto"}
        p="5">
        <ScrollView>{children}</ScrollView>
      </Box>
      <Box mt="4">
        <HStack justifyContent={"center"} space={5}>
          <Button variant={"outline"}>
            <Text>Previous</Text>
          </Button>
          <Button variant={"subtle"}>
            <Text>Next</Text>
          </Button>
        </HStack>
      </Box>
    </View>
  );
};

export default QuizLayout;

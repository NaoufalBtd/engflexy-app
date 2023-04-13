import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { Box, Button, Heading, Text } from "native-base";
import React from "react";
import { ImageBackground } from "react-native";
import NumericShowcaseBox from "../elements/NumericShowcaseBox";
interface LessonCardProps {
  title: string;
  subtitle: string;
}

const LessonCard: React.FC<LessonCardProps> = ({ title, subtitle }) => {
  const router = useRouter();
  return (
    <Box w="90%" margin="auto">
      <ImageBackground
        style={{
          height: 300,
          borderRadius: 30,
        }}
        imageStyle={{ borderRadius: 10 }}
        source={{
          uri: "https://img.freepik.com/free-vector/hand-drawn-english-school-illustration-with-touristic-attractions_23-2149457659.jpg",
        }}>
        <NumericShowcaseBox
          number={12}
          title="Enrolled"
          style={{
            position: "absolute",
            backgroundColor: "white",
            paddingHorizontal: 5,
            right: 5,
            top: 5,
          }}
        />
        <Box flex="1" />
        <Box
          opacity="90"
          bgColor="primary.700"
          borderRadius="md"
          mb={5}
          mx={"auto"}
          px={7}
          py={4}
          w={"95%"}>
          <Box flexDir="row" justifyContent="space-between">
            <Heading color="white">{title}</Heading>
            <FontAwesome color="white" name="heart" size={30} border />
          </Box>
          <Text color="white" fontSize="xs">
            {subtitle}
          </Text>
          <Button
            colorScheme="primary"
            color="white"
            borderRadius="lg"
            onPress={() => {
              router.push("/course/learnWords");
            }}>
            Enroll
          </Button>
        </Box>
      </ImageBackground>
    </Box>
  );
};

export default LessonCard;

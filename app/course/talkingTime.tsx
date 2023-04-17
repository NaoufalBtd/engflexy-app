import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Box, HStack, Heading, Image, Text } from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";

interface talkingTimeProps {}

const TalkingTime: React.FC<talkingTimeProps> = () => {
  const width = Dimensions.get("window").width;
  const value = useSharedValue(0);

  const questions = ["What is your name?", "How old are you?"];

  return (
    <SafeAreaView>
      <Box>
        <Box mx="auto" mb="4">
          <Image
            source={{
              uri: "https://img.freepik.com/free-vector/opinion-concept-illustration_114360-4723.jpg",
            }}
            alt="Alternate Text"
            size="2xl"
          />
        </Box>

        <Box>
          {/* you can add ref to get scrollTo and prev and next */}
          <Carousel
            loop
            width={width}
            height={width / 2}
            autoPlay={false}
            data={questions}
            defaultScrollOffsetValue={value}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => console.log("current index:", index)}
            renderItem={({ index }) => (
              <Box
                style={{
                  flex: 1,
                  // borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Heading>{index + 1}.</Heading>
                <Text fontSize="md">{questions[index]}</Text>
              </Box>
            )}
          />
        </Box>
        <HStack justifyContent={"center"} space="2">
          {questions.map((question, index) => {
            return (
              <FontAwesome
                name="circle"
                size={24}
                color="black"
                // style={{ borderColor: "black", borderWidth: 1 }}
                key={index}
              />
            );
          })}
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default TalkingTime;

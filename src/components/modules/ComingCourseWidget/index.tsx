import { useRouter } from "expo-router";
import { Badge, Box, Button, HStack, Heading, Image } from "native-base";
import React from "react";
import CountDown from "react-native-countdown-component";

interface indexProps {}

const ComingCourseWidget: React.FC<indexProps> = () => {
  const router = useRouter();
  return (
    <Box>
      <Box flexDir={"row"} justifyContent={"space-between"}>
        <Heading>Next Course whg</Heading>
        <CountDown
          until={10}
          // onFinish={() => alert("finished")}
          onPress={() => alert("hello")}
          size={15}
        />
      </Box>

      <Box flexDir="row" justifyContent="space-between" alignItems="center">
        <HStack space={2}>
          <Image
            source={{
              uri: "https://engflexy.com/assets/icons/icon-livres.png",
            }}
            w="70"
            // h="100%"
            alt="Alternate Text"
            resizeMode="contain"
          />
          <Box py="3">
            <Badge colorScheme="warning" borderRadius={"lg"}>
              Group Class
            </Badge>
            <Heading size="sm">3 The world around you</Heading>
            <Heading size="xs">19 April at 10:00</Heading>
          </Box>
        </HStack>
        <Button
          variant={"outline"}
          onPress={() => {
            router.push("/planning/");
          }}>
          Details
        </Button>
      </Box>
    </Box>
  );
};

export default ComingCourseWidget;

import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  Box,
  Center,
  HStack,
  Heading,
  Image,
  Progress,
  Text,
} from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AccordionItem from "../../src/components/elements/AccordionItem";
import LessonStagger from "../../src/components/modules/LessonStagger";

interface learnWordsProps {}

const LearnWords: React.FC<learnWordsProps> = () => {
  return (
    <SafeAreaView>
      <Box>
        <Box>
          {/* Header progress bar */}
          <Box
            margin={"auto"}
            w={"full"}
            mb="3"
            flexDir={"row"}
            px="3"
            alignItems={"center"}
            justifyContent={"space-between"}>
            <Box w="3/4">
              <Heading
                textAlign="center"
                fontStyle="italic"
                color="primary.400">
                10 in row
              </Heading>
              <Progress size="md" colorScheme={"primary"} value={66} />
            </Box>
          </Box>
        </Box>
        <Box>
          <Center>
            <Box
              borderRadius={10}
              borderWidth={1}
              flexDir="row"
              justifyContent={"space-between"}
              alignItems="center"
              p="3"
              borderColor={"gray.300"}
              w="5/6"
              mx={"auto"}
              my="3">
              <Box>
                <HStack alignItems={"center"} space={1}>
                  <Text fontSize="md">[klɒɡ]</Text>
                  <Heading>Word</Heading>

                  <FontAwesome name="volume-up" size={24} color="blue" />
                </HStack>
                <Heading textAlign="center" color="text.500">
                  كلمة
                </Heading>
              </Box>

              <Image
                source={{
                  uri: "https://wallpaperaccess.com/full/317501.jpg",
                }}
                alt="Alternate Text"
                size="md"
                my="2"
                borderRadius="lg"
              />
            </Box>

            <Box borderRadius={10} bgColor={"primary.700"}>
              <AccordionItem title="Explanation" isOpen>
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ipsam magnam assumenda fugiat natus quae nisi amet tempora
                  voluptates, perspiciatis quod deleniti exercitationem, vitae
                  minima dicta atque officiis dolore deserunt consequatur.
                </Text>
              </AccordionItem>

              <AccordionItem title="Example">
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ipsam magnam assumenda fugiat natus quae nisi amet tempora
                  voluptates, perspiciatis quod deleniti exercitationem, vitae
                  minima dicta atque officiis dolore deserunt consequatur.
                </Text>
              </AccordionItem>

              <AccordionItem title="Synonyms">
                <Box flexDir={"row"}>
                  <Box flexDir={"row"}>
                    <Text mr="1">Word</Text>
                    <FontAwesome name="volume-up" size={24} color="black" />
                  </Box>
                </Box>
              </AccordionItem>
            </Box>
          </Center>
        </Box>
        <LessonStagger />
      </Box>
    </SafeAreaView>
  );
};

export default LearnWords;

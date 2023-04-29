import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Icon,
  Progress,
  ScrollView,
  Text,
} from "native-base";
import React from "react";
import AccordionItem from "../../elements/AccordionItem";
import BlurredVoc from "../../modules/BlurredVoc";
import VocBox from "../../modules/VocBox";

interface learnWordsProps {}

const VocabularyTemplate: React.FC<learnWordsProps> = () => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleFlip = () => {
    setIsFlipped(true);
  };
  return (
    <ScrollView>
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
          <Box w="3/4" mx="auto">
            <Heading textAlign="center" fontStyle="italic" color="primary.400">
              10 in row
            </Heading>
            <Progress size="md" colorScheme={"primary"} value={66} />
          </Box>
        </Box>
      </Box>
      {isFlipped ? (
        <Box>
          <Center>
            <VocBox
              ipa="klɒɡ"
              word="Word"
              imageUri="https://wallpaperaccess.com/full/317501.jpg"
              wordInArabic="كلمة"
            />

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
      ) : (
        <Box px={5} justifyContent={"center"}>
          <BlurredVoc
            ipa="klɒɡ"
            word="Word"
            imageUri="https://wallpaperaccess.com/full/317501.jpg"
          />
          <Box width={"full"} my={3} alignItems={"center"}>
            <Button px="5" py="4" onPress={handleFlip}>
              <HStack alignItems={"center"} space="2">
                <Icon as={FontAwesome} name="repeat" size="sm" color="white" />
                <Text fontSize={"lg"}>Flip</Text>
              </HStack>
            </Button>
          </Box>
        </Box>
      )}
      {/* <LessonStagger /> */}
    </ScrollView>
  );
};

export default VocabularyTemplate;

import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Icon,
  Progress,
  ScrollView,
  Text,
  View,
} from "native-base";
import React, { useState } from "react";
import vocData from "../../../../assets/mock/voc.json";
import { Lesson } from "../../../types/models/lessonsModel";
import { calculatePercentage, isLastIndex } from "../../../utils";
import AccordionItem from "../../elements/AccordionItem";
import BlurredVoc from "../../modules/BlurredVoc";
import VocBox from "../../modules/VocBox";

interface learnWordsProps {
  lesson: Lesson;
}

const VocabularyTemplate: React.FC<learnWordsProps> = ({ lesson }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [index, setIndex] = useState(0);
  const vocsNumber = vocData.length;
  const currentVoc = vocData[index];
  // const quizId  = lesson.id;
  //todo getData from backend https://engflexy.ma/app/admin/sectionItem/sectionId/${quizId}

  const handleFlip = () => {
    setIsFlipped(true);
  };
  const handleNextVoc = () => {
    setIsFlipped(false);
    setIndex(index + 1);
  };
  return (
    <View>
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
              {index} in row
            </Heading>
            <Progress
              size="md"
              colorScheme={"primary"}
              value={calculatePercentage(index, vocsNumber)}
            />
          </Box>
        </Box>
      </Box>
      {isFlipped ? (
        <Box>
          <Box bg="background.surface" py={3} rounded="2xl">
            <ScrollView>
              <VocBox
                transcription={currentVoc.transcription}
                word={currentVoc.response}
                imageUri={currentVoc.imageUrl}
                wordInArabic={currentVoc.translation}
              />

              <Box borderRadius={10} bgColor={"primary.700"}>
                <AccordionItem title="Explanation" isOpen>
                  <Text>{currentVoc.explanation}</Text>
                </AccordionItem>

                <AccordionItem title="Example">
                  <Text>{currentVoc.example}</Text>
                </AccordionItem>

                <AccordionItem title="Synonyms">
                  <Box flexDir={"row"} flexWrap={"wrap"}>
                    {currentVoc.synonyms.map((synonym, index) => (
                      <Box key={synonym} flexDir={"row"}>
                        <Text mr="1">{synonym}</Text>
                        <FontAwesome name="volume-up" size={24} color="black" />
                        <Divider orientation="vertical" mx={2} />
                      </Box>
                    ))}
                  </Box>
                </AccordionItem>
              </Box>
            </ScrollView>
          </Box>
          {!isLastIndex(vocData, index) && (
            <Button
              variant={"outline"}
              onPress={handleNextVoc}
              rounded={"lg"}
              my={4}>
              <Text fontSize={"lg"}>Next</Text>
            </Button>
          )}
        </Box>
      ) : (
        <Box px={5} justifyContent={"center"}>
          <BlurredVoc
            transcription={currentVoc.transcription}
            word={currentVoc.response}
            imageUri={currentVoc.imageUrl}
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
    </View>
  );
};

export default VocabularyTemplate;

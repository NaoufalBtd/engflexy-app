import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  ScrollView,
  Text,
  View,
} from "native-base";
import React, { useState } from "react";
import useSWR from "swr";
import { getVocabulary } from "../../../constants/ApiUrls";
import { ApiVocabulary } from "../../../types/api/ApiVocabulary";
import { LessonChapter } from "../../../types/models/lessonChapterModel";
import { isLastIndex } from "../../../utils";
import { getFetcher } from "../../../utils/serverUtils";
import AccordionItem from "../../elements/AccordionItem";
import Listen from "../../elements/Listen";
import ErrorBox from "../../modules/ErrorBox";
import ProgressBar from "../../modules/ProgressBar";
import BlurredVoc from "../../modules/Vocabulary/BlurredVoc";
import VocBox from "../../modules/Vocabulary/VocBox";
import VocSkeleton from "../../modules/Vocabulary/VocSkeleton";

interface learnWordsProps {
  lesson: LessonChapter;
}

const VocabularyTemplate: React.FC<learnWordsProps> = ({ lesson }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [index, setIndex] = useState(0);
  const {
    isLoading,
    error,
    data: res,
  } = useSWR(getVocabulary(lesson.id), getFetcher<ApiVocabulary[]>);
  const vocData = res?.data;

  if (isLoading) return <VocSkeleton />;
  if (error || !vocData)
    return (
      <Box
        h="full"
        alignItems={"center"}
        flexDir={"row"}
        justifyContent={"center"}>
        <ErrorBox />
      </Box>
    );

  const vocsNumber = vocData.length;
  const currentVoc = vocData[index];

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
            <ProgressBar index={index} length={vocsNumber} />
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
                      <Box key={synonym} flexDir={"row"} alignItems={"center"}>
                        <Text mr="1">{synonym}</Text>
                        <Listen word={synonym} color="primary.400" />
                        <Divider
                          h={5}
                          orientation="vertical"
                          colorScheme={"blue"}
                          mx={2}
                        />
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

import { Box, HStack, Heading, Image, Text } from "native-base";
import React from "react";
import Listen from "../../elements/Listen";

interface VocBoxProps {
  transcription: string;
  word: string;
  imageUri: string;
  wordInArabic: string;
}

const VocBox: React.FC<VocBoxProps> = ({
  transcription,
  word,
  imageUri,
  wordInArabic,
}) => {
  return (
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
        <Box mx={"auto"}></Box>
        <HStack alignItems={"center"} space={1}>
          <Text fontSize="md">{transcription}</Text>
          <Listen word={word} />
        </HStack>
        <Heading>{word}</Heading>

        <Heading textAlign="center" color="text.500">
          {wordInArabic}
        </Heading>
      </Box>

      <Image
        source={{
          uri: imageUri,
        }}
        alt="Vocabulary illustration image"
        size="md"
        my="2"
        borderRadius="lg"
      />
    </Box>
  );
};

export default VocBox;
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { Box, Heading } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import Listen from "../elements/Listen";

interface BlurredVocProps {
  imageUri: string;
  ipa: string;
  word: string;
}

const BlurredVoc: React.FC<BlurredVocProps> = ({ imageUri, ipa, word }) => {
  return (
    <Box py={3} borderColor={"white"} borderWidth={1}>
      <Image style={styles.image} source={{ uri: imageUri }} />
      <BlurView intensity={100} style={styles.blurContainer}>
        <Box>
          <Box>
            <Heading>[{ipa}]</Heading>
            <Listen />
          </Box>
          <Heading>{word}</Heading>
        </Box>
      </BlurView>
    </Box>
  );
};

export default BlurredVoc;

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
  blurContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

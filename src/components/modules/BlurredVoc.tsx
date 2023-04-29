import { BlurView } from "expo-blur";
import { Box, HStack, Heading, Image } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { useAppTheme } from "../../theme";
import { alpha } from "../../utils/uiUtils";
import Listen from "../elements/Listen";

interface BlurredVocProps {
  imageUri: string;
  ipa: string;
  word: string;
}

const BlurredVoc: React.FC<BlurredVocProps> = ({ imageUri, ipa, word }) => {
  const { colors } = useAppTheme();
  return (
    <Box borderColor={"white"} borderWidth={1} height={350}>
      <Image
        style={styles.image}
        alt="blurred vocabulary image"
        source={{ uri: imageUri }}
      />
      <BlurView tint="dark" intensity={100} style={styles.blurContainer}>
        <Box
          p="5"
          borderRadius={"xl"}
          bgColor={alpha(colors.background.level1, 0.5)}>
          <HStack space={4} alignItems={"center"}>
            <Heading>[{ipa}]</Heading>
            <Listen />
          </HStack>
          <Heading textAlign={"center"} fontSize={"3xl"}>
            {word}
          </Heading>
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

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { Box, Icon } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

interface BackButtonProps {}

const BackButton: React.FC<BackButtonProps> = () => {
  const router = useRouter();
  return (
    <Box mb="3" mt="5">
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}>
        <Icon as={FontAwesome} name="chevron-left" size="lg" color={"white"} />
      </TouchableOpacity>
    </Box>
  );
};

export default BackButton;

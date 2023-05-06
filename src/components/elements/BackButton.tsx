import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { HStack, Icon, Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

interface BackButtonProps {
  title?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ title }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        router.back();
      }}>
      <HStack space={2} alignItems={"center"} mb="3" mt="5">
        <Icon
          as={FontAwesome}
          name="chevron-left"
          size="lg"
          color={"coolGray.100"}
        />
        {title && (
          <Text color={"coolGray.100"} fontSize={"md"}>
            {title}
          </Text>
        )}
      </HStack>
    </TouchableOpacity>
  );
};

export default BackButton;

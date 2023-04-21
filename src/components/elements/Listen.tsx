import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Icon } from "native-base";
import { ThemeComponentSizeType } from "native-base/lib/typescript/components/types";
import React from "react";
import { TouchableOpacity } from "react-native";

interface ListenProps {
  color?: string;
  size?: ThemeComponentSizeType<"Icon">;
  bordered?: boolean;
}

const Listen: React.FC<ListenProps> = ({
  color = "white",
  size = "md",
  bordered,
}) => {
  return (
    <TouchableOpacity
      style={
        bordered && {
          borderWidth: 1,
          borderColor: color,
          borderRadius: 10,
          padding: 5,
          marginHorizontal: 5,
        }
      }>
      <Icon as={FontAwesome} name="volume-up" size={size} color={color} />
    </TouchableOpacity>
  );
};

export default Listen;
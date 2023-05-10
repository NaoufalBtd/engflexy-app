import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Audio } from "expo-av";
import { Factory, Icon } from "native-base";
import {
  ColorType,
  ThemeComponentSizeType,
} from "native-base/lib/typescript/components/types";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

interface ListenProps {
  color?: ColorType;
  size?: ThemeComponentSizeType<"Icon">;
  bordered?: boolean;
  word: string;
}

const Listen: React.FC<ListenProps> = ({
  color = "white",
  size = "md",
  bordered = false,
  word,
}) => {
  const NBTouchableOpacity = Factory(TouchableOpacity);
  const [sound, setSound] = useState<Audio.Sound>();

  const playSound = async () => {
    try {
      const wordEncoded = encodeURI(word);
      const uri = `https://translate.google.com.vn/translate_tts?ie=UTF-8&q=${wordEncoded}&tl=en&client=tw-ob`;
      // const soundUri = data[0].phonetics[0].audio;
      // console.log("soundUri: ", soundUri);
      const { sound } = await Audio.Sound.createAsync({
        uri,
      });
      setSound(sound);

      await sound.playAsync();
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <NBTouchableOpacity
      onPress={playSound}
      style={
        bordered && {
          borderWidth: 1,
          borderColor: color,
          borderRadius: 10,
          padding: 5,
          marginHorizontal: 5,
        }
      }>
      <Icon
        as={FontAwesome}
        name="volume-up"
        size={size}
        color={color || "white"}
      />
    </NBTouchableOpacity>
  );
};

export default Listen;

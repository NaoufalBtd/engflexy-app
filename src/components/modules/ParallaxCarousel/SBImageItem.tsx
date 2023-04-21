import React from "react";
import {
  ActivityIndicator,
  Image,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
interface Props {
  style?: StyleProp<ViewStyle>;
  images: number[];
  index: number;
  height?: number;
}

export const SBImageItem: React.FC<Props> = ({
  style,
  images,
  index,
  height,
}) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size="small" />
      <Image style={[styles.image, { height }]} source={images[index]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    resizeMode: "contain",
    height: 200,
    width: "100%",
  },
});

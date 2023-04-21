import React from "react";
import type { StyleProp, ViewProps, ViewStyle } from "react-native";
import { LongPressGestureHandler } from "react-native-gesture-handler";
import Animated, { AnimateProps } from "react-native-reanimated";
import { SBImageItem } from "./SBImageItem";

interface Props extends AnimateProps<ViewProps> {
  style?: StyleProp<ViewStyle>;
  index: number;
  pretty?: boolean;
  images: number[];
  height?: number;
}

export const SBItem: React.FC<Props> = (props) => {
  const { style, index, pretty, height, images, ...animatedViewProps } = props;

  return (
    <LongPressGestureHandler>
      <Animated.View style={{ flex: 1 }} {...animatedViewProps}>
        <SBImageItem
          images={images}
          height={height}
          index={index}
          style={style}
        />
      </Animated.View>
    </LongPressGestureHandler>
  );
};

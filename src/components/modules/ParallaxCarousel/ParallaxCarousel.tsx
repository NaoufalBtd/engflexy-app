import * as React from "react";
import { View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { SBItem } from "./SBItem";

const colors = [
  "#26292E",
  "#899F9C",
  "#B3C680",
  "#5C6265",
  "#F5D399",
  "#F1F1F1",
];

interface ParralaxCarouselProps {
  isVertical?: boolean;
  autoPlay?: boolean;
  pagingEnabled?: boolean;
  snapEnabled?: boolean;
  onScroll: (index: number) => void;
  width: number;
  height?: number;
  loop?: boolean;
  mode?: "parallax" | "horizontal-stack" | "vertical-stack";
  images: number[];
  ref?: React.Ref<ICarouselInstance>;
}

const ParallaxCarousel: React.FunctionComponent<ParralaxCarouselProps> =
  React.forwardRef(
    (
      {
        width,
        height,
        isVertical,
        autoPlay,
        pagingEnabled,
        snapEnabled,
        onScroll,
        loop,
        mode,
        images,
      },
      ref
    ) => {
      const progressValue = useSharedValue(0);
      const PAGE_WIDTH = width;
      const baseOptions = isVertical
        ? ({
            vertical: true,
            width: PAGE_WIDTH,
            height: PAGE_WIDTH * 0.6,
          } as const)
        : ({
            vertical: false,
            width: PAGE_WIDTH,
            height: height || PAGE_WIDTH * 0.6,
          } as const);

      return (
        <View
          style={{
            alignItems: "center",
          }}>
          <Carousel
            {...baseOptions}
            ref={ref}
            loop={loop}
            pagingEnabled={pagingEnabled}
            snapEnabled={snapEnabled}
            autoPlay={autoPlay}
            autoPlayInterval={1500}
            onScrollEnd={(index) => onScroll(index)}
            onProgressChange={(_, absoluteProgress) => {
              return (progressValue.value = absoluteProgress);
            }}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 50,
            }}
            data={images}
            renderItem={({ index }) => (
              <SBItem
                index={index}
                images={images}
                height={baseOptions.height}
              />
            )}
          />
          {!!progressValue && (
            <View
              style={
                isVertical
                  ? {
                      flexDirection: "column",
                      justifyContent: "space-between",
                      width: 10,
                      alignSelf: "center",
                      position: "absolute",
                      right: 5,
                      top: 40,
                    }
                  : {
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: 100,
                      alignSelf: "center",
                    }
              }>
              {images.map((_, index) => {
                return (
                  <PaginationItem
                    backgroundColor={colors[index]}
                    animValue={progressValue}
                    index={index}
                    key={index}
                    isRotate={isVertical}
                    length={colors.length}
                  />
                );
              })}
            </View>
          )}
        </View>
      );
    }
  );

const PaginationItem: React.FC<{
  index: number;
  backgroundColor: string;
  length: number;
  animValue: Animated.SharedValue<number>;
  isRotate?: boolean;
}> = (props) => {
  const { animValue, index, length, backgroundColor, isRotate } = props;
  const width = 10;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-width, 0, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-width, 0, width];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  }, [animValue, index, length]);
  return (
    <View
      style={{
        backgroundColor: "white",
        width,
        height: width,
        borderRadius: 50,
        overflow: "hidden",
        transform: [
          {
            rotateZ: isRotate ? "90deg" : "0deg",
          },
        ],
      }}>
      <Animated.View
        style={[
          {
            borderRadius: 50,
            backgroundColor,
            flex: 1,
          },
          animStyle,
        ]}
      />
    </View>
  );
};

export default ParallaxCarousel;

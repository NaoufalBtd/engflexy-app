import { useRouter } from "expo-router";
import { Box, Button, Heading, Text, View } from "native-base";
import React, { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ICarouselInstance } from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";
import ParallaxCarousel from "../modules/ParallaxCarousel";

interface WelcomeTemplatesProps {}

const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedHeading = Animated.createAnimatedComponent(Heading);

const WelcomeTemplates: React.FC<WelcomeTemplatesProps> = () => {
  const [screenWidth, setScreenWidth] = React.useState(0);
  const [scrollIdx, setScrollIdx] = React.useState(0);
  const carouselRef = React.useRef<ICarouselInstance>(null);

  const route = useRouter();

  const content = [
    {
      title: "Discover all the best recipes you needed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      images: require("../../../assets/images/illustration/teacher-pana.png"),
    },
    {
      title: "Discover new Things",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      images: require("../../../assets/images/illustration/Thesis-amico.png"),
    },
  ];

  const handleActionButtonClick = () => {
    if (!carouselRef.current) return;
    const currentIndex = carouselRef.current?.getCurrentIndex();
    if (carouselRef.current?.getCurrentIndex() === content.length - 1) {
      console.log("Get Started");
      route.replace("/(tabs)/home");
      return;
    }
    carouselRef.current?.next();
  };
  const handleScroll = (index: number) => {
    console.log("index", index);
    setScrollIdx(index);
  };
  const titleOpacity = useSharedValue(0);
  const descriptionOpacity = useSharedValue(1);
  const transY = useSharedValue(10);

  const titleStyle = useAnimatedStyle(() => {
    return {
      opacity: titleOpacity.value,
      transform: [
        {
          translateY: withTiming(transY.value * 10, { duration: 500 }),
        },
      ],
    };
  });

  const descriptionStyle = useAnimatedStyle(() => {
    return {
      opacity: descriptionOpacity.value,
      transform: [
        {
          translateY: withTiming(transY.value * 10, {
            duration: 500,
          }),
        },
      ],
    };
  });

  useEffect(() => {
    titleOpacity.value = 0;
    descriptionOpacity.value = 0;
    transY.value = 10;
    titleOpacity.value = withTiming(1, { duration: 450 });
    descriptionOpacity.value = withTiming(1, { duration: 550 });
    transY.value = withTiming(0, { duration: 700 });
  }, [scrollIdx]);

  return (
    <SafeAreaView>
      <View
        mt={3}
        bgColor={"background.surface"}
        height={"full"}
        onLayout={(evt) => {
          setScreenWidth(evt.nativeEvent.layout.width);
        }}>
        <Box flexDir={"row"} justifyContent={"space-between"} p={3} mb={5}>
          <Box flex="1"></Box>
          <Heading>Skip</Heading>
        </Box>
        <Box
          backgroundColor={"background.level2"}
          borderRadius={"lg"}
          my="3"
          minH="70%">
          {/* <SvgXml xml={engTeacher} width={screenWidth} height={300} /> */}
          <ParallaxCarousel
            onScroll={handleScroll}
            images={content.map((item) => item.images)}
            width={370}
            height={300}
            loop={false}
            ref={carouselRef}
          />
          <Box my={5}>
            <AnimatedHeading
              fontSize={"xl"}
              style={[{ textAlign: "center", fontWeight: "bold" }, titleStyle]}>
              {content[scrollIdx].title}
            </AnimatedHeading>
            <AnimatedText style={[{ textAlign: "center" }, descriptionStyle]}>
              {content[scrollIdx].description}
            </AnimatedText>
          </Box>
        </Box>
        <Box>
          <Button
            width={"5/6"}
            margin={"auto"}
            borderRadius={"xl"}
            onPress={handleActionButtonClick}
            variant={"subtle"}>
            {carouselRef.current?.getCurrentIndex() === content.length - 1
              ? "Get Started"
              : "Next"}
          </Button>
        </Box>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeTemplates;

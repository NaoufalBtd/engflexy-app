import { Box, Heading, Image, ScrollView, Text } from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useSWR from "swr";
import IntermediateSvg from "../../../assets/svg/book_lover.svg";
import AdvancedSvg from "../../../assets/svg/books.svg";
import PreIntermediateSvg from "../../../assets/svg/education.svg";
import ElementarySvg from "../../../assets/svg/reading_book.svg";
import UpperIntermediateSvg from "../../../assets/svg/sharing_knowledge.svg";
import { PARCOURS_URL } from "../../constants/ApiUrls";
import { getFetcher } from "../../utils/serverUtils";
import NumericShowcaseBox from "../elements/NumericShowcaseBox";
import ComingCourseWidget from "../modules/ComingCourseWidget";
import LessonCard from "../modules/LessonCard";
import FreePackDashboardTemplate from "./DashboardsTemplates/FreePackDashboardTemplate";

interface homeProps {}

const HomeTemplate: React.FC<homeProps> = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  console.log("the url: ", PARCOURS_URL);
  const { data, error, isLoading } = useSWR(PARCOURS_URL, getFetcher);
  console.log("data is: ", data?.data);
  const courseData = [
    {
      title: "Elementary",
      svg: ElementarySvg,
      bg: "#ED6363",
    },
    {
      title: "Pre Intermediate",
      svg: PreIntermediateSvg,
      bg: "#278EA5",
    },
    {
      title: "Intermediate",
      svg: IntermediateSvg,
      bg: "#21E6C1",
    },
    {
      title: "Upper Intermediate",
      svg: UpperIntermediateSvg,
      bg: "#3C6562",
    },
    {
      title: "Advanced",
      svg: AdvancedSvg,
      bg: "#1F4287",
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView bgColor={"background.surface"}>
        <Box
          w="full"
          px="3"
          py="9"
          mb="4"
          bgColor="background.level1"
          onLayout={(evt) => {
            const { width } = evt.nativeEvent.layout;
            setScreenWidth(width);
          }}
          borderBottomRadius={55}>
          <Box
            flexDir="row"
            // bgColor="amber.100"
            p={5}
            justifyContent="space-between"
            w="full">
            <Box>
              <Text fontSize="md" color="text.400">
                Avril 28th
              </Text>
              <Box flexDir={"row"} alignItems="center">
                <Text fontSize={"lg"} mr="1">
                  Hey,
                </Text>
                <Heading fontSize="lg">Naoufal!</Heading>
              </Box>
            </Box>
            <Box>
              <Image
                source={{
                  uri: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png",
                }}
                alt="Alternate Text"
                size="sm"
                borderRadius="lg"
              />
            </Box>
          </Box>
          <Box flexDir="row" justifyContent="space-between" px="5" mt="3">
            <NumericShowcaseBox title="Current" active number={2} />
            <NumericShowcaseBox title="Completed" number={5} />
            <NumericShowcaseBox title="Total" number={7} />
          </Box>
        </Box>
        <Box px="2">
          <ComingCourseWidget />
        </Box>
        <FreePackDashboardTemplate />
        <Box py="10">
          <LessonCard title="Lesson 1" subtitle="Lorem ipsum dolor sit amet" />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeTemplate;

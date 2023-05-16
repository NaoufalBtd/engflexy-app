import { Box, Heading, ScrollView, Text } from "native-base";
import React from "react";
import { useWindowDimensions } from "react-native";
import useSWR from "swr";
import { PARCOURS_URL } from "../../../constants/ApiUrls";
import { ApiParcours } from "../../../types/api/ApiParcours";
import { formatCourse } from "../../../utils/formatUtils";
import { getFetcher } from "../../../utils/serverUtils";
import { generateUniqueId } from "../../../utils/textUtils";
import { getSvgIconByParcours } from "../../../utils/uiUtils";
import CourseLevelCard from "../../modules/CourseLevelCard";

interface FreePackDashboardTemplateProps {}

const bgColors = ["#ED6363", "#278EA5", "#21E6C1", "#3C6562", "#1F4287"];

const FreePackDashboardTemplate: React.FC<
  FreePackDashboardTemplateProps
> = () => {
  const { width } = useWindowDimensions();
  const {
    data: res,
    error,
    isLoading,
  } = useSWR(PARCOURS_URL, getFetcher<ApiParcours[]>);

  const courses = res?.data ? formatCourse(res?.data) : null;

  return (
    <Box>
      <Box px={2} my={3}>
        <Heading mb={2}>
          Jump to <Heading color="primary.500">Course</Heading>
        </Heading>
        {isLoading && <Text>Loading...</Text>}
        {error && <Text>Error: {error}</Text>}
        {courses && (
          <ScrollView
            w="full"
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {courses.map(
              (
                course,
                idx //todo: filter only free courses
              ) => (
                <Box key={generateUniqueId()} mx={2}>
                  <CourseLevelCard
                    title={course.title}
                    id={course.id}
                    svg={getSvgIconByParcours(course.label)}
                    width={width * 0.6}
                    bgColor={bgColors[idx]}
                  />
                </Box>
              )
            )}
          </ScrollView>
        )}
      </Box>
    </Box>
  );
};

export default FreePackDashboardTemplate;

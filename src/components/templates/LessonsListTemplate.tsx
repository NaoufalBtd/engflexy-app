import _ from "lodash";
import { Box, FlatList, View } from "native-base";
import React from "react";
import cours from "../../../assets/mock/parcour.json";
import { useAppSelector } from "../../hooks/stateHooks";
import Header from "../modules/Header";
import LessonCard from "../modules/LessonCard";
import LessonCardSkeleton from "../modules/LessonCard/LessonCardSkeleton";

interface LessonsListTemplateProps {
  courses?: typeof cours;
}

const LessonsListTemplate: React.FC<LessonsListTemplateProps> = () => {
  const { lessons, loading, error } = useAppSelector((state) => state.course);
  const listData = lessons ? _.values(lessons?.byId) : Array(5).fill(null);
  return (
    <View bgColor={"background.level2"}>
      <Header />

      <Box
        height={"full"}
        borderTopRadius={"3xl"}
        bgColor={"background.surface"}>
        <FlatList
          data={listData}
          renderItem={({ item }) => {
            return (
              <Box my="4" px={5}>
                {!loading ? (
                  <LessonCard id={item.id} />
                ) : (
                  <LessonCardSkeleton />
                )}
              </Box>
            );
          }}
        />
      </Box>
    </View>
  );
};

export default LessonsListTemplate;

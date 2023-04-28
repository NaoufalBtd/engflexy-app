import { Box, FlatList, View } from "native-base";
import React from "react";
import cours from "../../../assets/mock/parcour.json";
import Header from "../modules/Header";
import LessonCard from "../modules/LessonCard";

interface LessonsListTemplateProps {
  courses?: typeof cours;
}

const LessonsListTemplate: React.FC<LessonsListTemplateProps> = () => {
  const [lessons, setLessons] = React.useState(cours);
  return (
    <View bgColor={"background.level2"}>
      <Header />
      <Box
        height={"full"}
        borderTopRadius={"3xl"}
        bgColor={"background.surface"}>
        <FlatList
          data={lessons}
          renderItem={({ item }) => (
            <Box my="4" px={5}>
              <LessonCard title={item.libelle} />
            </Box>
          )}
        />
      </Box>
    </View>
  );
};

export default LessonsListTemplate;

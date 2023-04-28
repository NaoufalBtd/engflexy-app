import { Text, View } from "native-base";
import React from "react";
import cours from "../../../assets/mock/cours.json";
import ArticleTemplate from "./LessonTemplates/ArticleTemplate";
import VocabularyTemplate from "./LessonTemplates/VocabularyTemplate";

interface LessonTemplateProps {
  data: typeof cours;
}

const LESSONS_SECTIONS_CODE = [
  { title: "Warm up", component: ArticleTemplate },
  { title: "vocabulary", component: VocabularyTemplate },
  { title: "Get to know", component: Text },
  { title: "Let's practice", component: Text },
];
const LessonTemplate: React.FC<LessonTemplateProps> = ({ data }) => {
  const [index, setIndex] = React.useState(1);
  const Template = LESSONS_SECTIONS_CODE[index].component;
  const courseData = cours[1];

  return (
    <View bgColor={"background.surface"} h={"full"}>
      {Template && <Template />}
    </View>
  );
};

export default LessonTemplate;

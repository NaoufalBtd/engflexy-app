import _ from "lodash";
import { Box, Text } from "native-base";
import React from "react";
import { useAppSelector } from "../../hooks/stateHooks";
import LessonContainerLayout from "../layouts/LessonContainerLayout";
import ErrorBox from "../modules/ErrorBox";
import ArticleTemplate from "./lessonChaptersTemplates/ArticleTemplate";
import PracticeTemplate from "./lessonChaptersTemplates/PracticeTemplate";
import VocabularyTemplate from "./lessonChaptersTemplates/VocabularyTemplate";

interface LessonChaptersTemplateProps {}

const LESSONS_SECTIONS_CODE = [
  { title: "Warm up", component: ArticleTemplate },
  { title: "Vocabulary", component: VocabularyTemplate },
  { title: "Get to know", component: ArticleTemplate },
  { title: "Let's practice", component: PracticeTemplate },
  { title: "Discussion", component: ArticleTemplate },
];

const LessonChaptersTemplate: React.FC<LessonChaptersTemplateProps> = () => {
  const {
    chapters,
    chapterIndex: lessonIndex,
    isLoading,
    error,
  } = useAppSelector((state) => state.lessons);

  const renderError = () => (
    <Box
      h="full"
      alignItems={"center"}
      flexDir={"row"}
      justifyContent={"center"}>
      <ErrorBox />
    </Box>
  );

  if (isLoading) {
    return <Text>Loading ...</Text>;
  }
  if (error || !chapters) {
    return renderError();
  }

  const Template = LESSONS_SECTIONS_CODE[lessonIndex].component;
  const lessonsData = _.values(chapters.byId);
  const data = _.find(
    lessonsData,
    (lesson) =>
      lesson.categorySection.label === LESSONS_SECTIONS_CODE[lessonIndex].title
  );
  if (!data) return renderError();

  return (
    <LessonContainerLayout>
      <Template lesson={data} />
    </LessonContainerLayout>
  );
};

export default LessonChaptersTemplate;

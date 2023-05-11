import _ from "lodash";
import { Box, Text } from "native-base";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/stateHooks";
import {
  nextChapter,
  previousChapter,
  selectNextChapterTitle,
  selectPreviousChapterTitle,
} from "../../store/reducers/lessonReducer";
import LessonContainerLayout from "../layouts/LessonContainerLayout";
import ErrorBox from "../modules/ErrorBox";
import ArticleTemplate from "./lessonChaptersTemplates/ArticleTemplate";
import VocabularyTemplate from "./lessonChaptersTemplates/VocabularyTemplate";
import PracticeTemplate from "./lessonChaptersTemplates/practice/PracticeTemplate";

interface LessonChaptersTemplateProps {}

const LESSONS_SECTIONS_CODE = [
  { title: "Warm up", component: ArticleTemplate },
  { title: "Vocabulary", component: VocabularyTemplate },
  { title: "Get to know", component: ArticleTemplate },
  { title: "Let's practice", component: PracticeTemplate },
  { title: "Discussion", component: ArticleTemplate },
];

const LessonChaptersTemplate: React.FC<LessonChaptersTemplateProps> = () => {
  const { chapters, chapterIndex, isLoading, error } = useAppSelector(
    (state) => state.lessons
  );
  const nextChapterTitle = useAppSelector(selectNextChapterTitle);
  const prevChapterTitle = useAppSelector(selectPreviousChapterTitle);
  const dispatch = useAppDispatch();
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

  const Template = LESSONS_SECTIONS_CODE[chapterIndex].component;
  const lessonsData = _.values(chapters.byId);
  const data = _.find(
    lessonsData,
    (lesson) =>
      lesson.categorySection.label === LESSONS_SECTIONS_CODE[chapterIndex].title
  );
  if (!data) return renderError();

  return (
    <LessonContainerLayout
      next={
        nextChapterTitle
          ? {
              title: nextChapterTitle,
              action: () => dispatch(nextChapter()),
            }
          : undefined
      }
      previous={
        prevChapterTitle
          ? {
              title: prevChapterTitle,
              action: () => dispatch(previousChapter()),
            }
          : undefined
      }>
      <Template lesson={data} />
    </LessonContainerLayout>
  );
};

export default LessonChaptersTemplate;

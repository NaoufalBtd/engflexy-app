import { Box, Text } from "native-base";
import React from "react";
import { getLessonChapterComponent } from "../../helpers";
import { useAppDispatch, useAppSelector } from "../../hooks/stateHooks";
import {
  nextChapter,
  previousChapter,
  selectNextChapterTitle,
  selectPreviousChapterTitle,
} from "../../store/reducers/lessonReducer";
import LessonContainerLayout from "../layouts/LessonContainerLayout";
import ErrorBox from "../modules/ErrorBox";

interface LessonChaptersTemplateProps {}

const LessonChaptersTemplate: React.FC<LessonChaptersTemplateProps> = () => {
  const { chapters, chapter, isLoading, error, lessonId } = useAppSelector(
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
  if (error || !chapters || !chapter) {
    return renderError();
  }

  const ChapterComponent = getLessonChapterComponent(
    chapter.categorySection?.label
  );

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
      {ChapterComponent ? (
        <ChapterComponent chapter={chapter} />
      ) : (
        renderError()
      )}
    </LessonContainerLayout>
  );
};

export default LessonChaptersTemplate;

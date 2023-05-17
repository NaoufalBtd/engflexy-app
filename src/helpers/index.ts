import { lazy } from "react";
import { chaptersComponents } from "../constants/Lesson";
import { QnsTypes } from "../constants/Quiz";

const FillBlankTemplate = lazy(
  () => import("../components/templates/quizTemplates/FillBlankTemplate")
);
const QcmTemplate = lazy(
  () => import("../components/templates/quizTemplates/QcmTemplate")
);

const HomeworkPractice = lazy(
  () =>
    import(
      "../components/templates/lessonChaptersTemplates/practice/HomeworkPractice"
    )
);

export const getLessonChapterComponent = (chapterCategory: string) => {
  const component = chaptersComponents.find(
    (c) => c.title === chapterCategory
  )?.component;

  return component || null;
};

export const getQuizQnComponent = (questionType: string) => {
  switch (questionType) {
    case QnsTypes.qcm:
      return QcmTemplate;
    case QnsTypes.writeCorrectForm:
      return FillBlankTemplate;
    case QnsTypes.correctMistake:
      return FillBlankTemplate;
    default:
      return null;
  }
};

export const getHomeWorkComponent = (typeHomework: string) => {
  switch (typeHomework) {
    case "Let's Practice":
      return HomeworkPractice;
    default:
      return null;
  }
};

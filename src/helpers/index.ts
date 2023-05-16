import { chaptersComponents } from "../constants/Lesson";
import { quizComp } from "../constants/Quiz";

export const getLessonChapterComponent = (chapterCategory: string) => {
  const component = chaptersComponents.find(
    (c) => c.title === chapterCategory
  )?.component;

  return component || null;
};

export const getQuizQnComponent = (questionType: string) => {
  const component = quizComp.find(
    (quiz) => quiz.questionType === questionType
  )?.component;

  return component || null;
};

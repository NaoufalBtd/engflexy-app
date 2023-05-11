import { Question } from "./QuestionModel";

export type Homework = {
  id: number;
  label: string;
  imageUrl: string;
  videoUrl: string;
  homeworkTypeId: number;
};

export type Homeworks = {
  allIds: number[];
  byId: Record<number, Homework>;
};

export interface HomeworkQn extends Omit<Question, "quizTypeId"> {
  homeworkId: number;
}

export type HomeworkQns = {
  allIds: number[];
  byId: Record<number, HomeworkQn>;
};

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

export interface HomeworkQn extends Question {
  homeworkId: number;
}

export type HomeworkQns = {
  allIds: number[];
  byId: Record<number, HomeworkQn>;
};

export type HomeworkType = {
  id: number;
  label: string;
  code: string;
};

export type HomeworkTypes = {
  allIds: number[];
  byId: Record<number, HomeworkType>;
};

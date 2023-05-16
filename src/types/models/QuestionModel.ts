import { QnCategory, QnsTypes } from "../../constants/Quiz";

export type Question = {
  id: number;
  ref: string | null;
  label: string;
  number: number;
  pointRightAnswer: number;
  pointWrongAnswer: number;
  questionTypeId: number;
  category: QnCategory;
};

export type Questions = {
  allIds: number[];
  byId: { [key: string]: Question };
};

export type QuestionType = {
  id: number;
  ref: string;
  label: QnsTypes | string;
};

export type QuestionTypes = {
  allIds: number[];
  byId: { [key: string]: QuestionType };
};

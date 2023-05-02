export type Question = {
  id: number;
  ref: string | null;
  label: string;
  number: number;
  pointRightAnswer: number;
  pointWrongAnswer: number;
  quizTypeId: number;
};

export type Questions = {
  allIds: number[];
  byId: { [key: string]: Question };
};

export type QuestionType = {
  id: number;
  ref: string | null;
  lib: string;
};

export type QuestionTypes = {
  allIds: number[];
  byId: { [key: string]: QuestionType };
};

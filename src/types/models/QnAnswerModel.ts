export type QnAnswer = {
  id: number;
  label: string;
  isCorrect: boolean;
  questionId: number;
};

export type QnAnswers = {
  allIds: number[];
  byId: { [key: string]: QnAnswer };
  correctAnswersIds: number[];
};

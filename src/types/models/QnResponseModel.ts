export type QnResponse = {
  id: number;
  label: string;
  isCorrect: boolean;
  questionId: number;
};

export type QnResponses = {
  allIds: number[];
  byId: { [key: string]: QnResponse };
  correctAnswersIds: number[];
};

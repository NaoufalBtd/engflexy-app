import { ApiQnResponse } from "../api/ApiQnResponse";
import { ApiQuestion } from "../api/ApiQuestion";

export type QuizQnAnswer = {
  id: number;
  answer: string;
  isCorrect: boolean;
  isAnswered: boolean;
  questionId: ApiQuestion["id"];
  responseId: ApiQnResponse["id"];
};

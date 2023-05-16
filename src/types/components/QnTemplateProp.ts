import { QuestionStatus } from "../../constants/Quiz";
import { QnResponse } from "../models/QnResponseModel";
import { Question, QuestionType } from "../models/QuestionModel";

export type QnTemplateProp = {
  question: Question;
  questionType?: QuestionType;
  questionStatus: QuestionStatus;
  responses: QnResponse[];
  answerSubmitted: boolean;
};

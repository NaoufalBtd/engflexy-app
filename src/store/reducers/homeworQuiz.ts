// redux toolkit reducer boilerplate for homeworkQuiz

import { createSlice } from "@reduxjs/toolkit";
import { QuestionStatus } from "../../constants/Quiz";

export interface HomeworkQuizState {
  isLoading: boolean;
  error: string | null;
  homeworkQuiz: any;
  homeworkQuizQuestions: any;
  homeworkQuizResponses: any;
  homeworkQuizIndex: number;
  currQuestionStatus: QuestionStatus;
  answerSubmitted: boolean;
  questionsTypes: any;
}

const initialState: HomeworkQuizState = {
  isLoading: false,
  error: null,
  homeworkQuiz: null,
  homeworkQuizQuestions: null,
  homeworkQuizResponses: null,
  homeworkQuizIndex: 0,
  currQuestionStatus: QuestionStatus.NotAnswered,
  answerSubmitted: false,
  questionsTypes: null,
};

const homeworkQuizSlice = createSlice({
  name: "homeworkQuiz",
  initialState,
  reducers: {},
});

export default homeworkQuizSlice.reducer;

export const {} = homeworkQuizSlice.actions;

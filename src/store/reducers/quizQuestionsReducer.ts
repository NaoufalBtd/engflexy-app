// redux toolkit boilerplate for questionsReducer

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

import { Question, Questions } from "../../types/models/QuestionModel";

import { normalizeQuiz } from "../../utils/normalizeUtils";

export interface QuestionsState {
  questions: Questions;
  questionIndex: number;
}

const initialState: QuestionsState = {
  questions: normalizeQuiz([]),
  questionIndex: 0,
};

export const questionsSlice = createSlice({
  name: "quizQuestions",
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<Question>) => {
      if (!state.questions?.allIds.includes(action.payload.id)) {
        state.questions?.allIds.push(action.payload.id);
      }
    },
  },
});

export const { addQuestion } = questionsSlice.actions;

export const selectQuestions = (state: RootState) => state.questions.questions;

export const selectQuestionIndex = (state: RootState) =>
  state.questions.questionIndex;

export default questionsSlice.reducer;

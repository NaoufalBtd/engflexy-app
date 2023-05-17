// redux toolkit reducer boilerplate for homeworkQuiz

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuestionStatus } from "../../constants/Quiz";
import { QnResponses } from "../../types/models/QnResponseModel";
import {
  Question,
  QuestionType,
  QuestionTypes,
  Questions,
} from "../../types/models/QuestionModel";
import { fetchHomeworkQnsAndResponses } from "../thunks/homeworkThunk";

export interface HomeworkQuizState {
  isLoading: boolean;
  error: string | null;
  homeworkQuizQuestions: Questions | null;
  homeworkQuizResponses: QnResponses | null;
  questionsTypes: QuestionTypes | null;
  homeworkQuizIndex: number;
  currQuestionStatus: QuestionStatus;
  answerSubmitted: boolean;
  currQuestionType: QuestionType | null;
  currQuestion: Question | null;
}

const initialState: HomeworkQuizState = {
  isLoading: false,
  error: null,
  homeworkQuizQuestions: null,
  homeworkQuizResponses: null,
  homeworkQuizIndex: 0,
  currQuestionStatus: QuestionStatus.NotAnswered,
  answerSubmitted: false,
  questionsTypes: null,
  currQuestionType: null,
  currQuestion: null,
};

const homeworkQuizSlice = createSlice({
  name: "homeworkQuiz",
  initialState,
  reducers: {
    changeQuestionStatus: (state, action: PayloadAction<QuestionStatus>) => {
      state.currQuestionStatus = action.payload;
    },
    submitHwAnswer: (state) => {
      state.answerSubmitted = true;
    },
    nextHwQuestion: (state) => {
      const { homeworkQuizQuestions, homeworkQuizIndex, questionsTypes } =
        state;
      if (
        homeworkQuizQuestions &&
        questionsTypes &&
        homeworkQuizIndex < homeworkQuizQuestions.allIds.length - 1
      ) {
        const currQnId = homeworkQuizQuestions?.allIds[homeworkQuizIndex];
        const currQn = homeworkQuizQuestions?.byId[currQnId];
        state.homeworkQuizIndex++;
        state.currQuestion = currQn;
        state.currQuestionStatus = QuestionStatus.NotAnswered;
        state.answerSubmitted = false;
        state.currQuestionType = questionsTypes.byId[currQn.questionTypeId];
      }
    },
    prevHwQuestion: (state) => {
      const { homeworkQuizQuestions, questionsTypes, homeworkQuizIndex } =
        state;

      if (homeworkQuizQuestions && homeworkQuizIndex > 0 && questionsTypes) {
        const currQnId = homeworkQuizQuestions.allIds[homeworkQuizIndex];
        const currQn = homeworkQuizQuestions.byId[currQnId];
        state.homeworkQuizIndex--;
        state.currQuestion = currQn;
        state.currQuestionStatus = QuestionStatus.NotAnswered;
        state.answerSubmitted = false;

        state.currQuestionType = questionsTypes.byId[currQn.questionTypeId];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeworkQnsAndResponses.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchHomeworkQnsAndResponses.fulfilled, (state, action) => {
      state.isLoading = false;
      state.homeworkQuizQuestions = action.payload.questions;
      state.homeworkQuizResponses = action.payload.responses;
      state.questionsTypes = action.payload.questionTypes;
      state.currQuestion =
        action.payload.questions.byId[action.payload.questions.allIds[0]];
      state.currQuestionType =
        action.payload.questionTypes.byId[
          action.payload.questions.byId[
            action.payload.questions.allIds[0]
          ].questionTypeId
        ];
      state.error = null;
    });
    builder.addCase(fetchHomeworkQnsAndResponses.rejected, (state, action) => {
      console.error(
        "fetchHomeworkQnsAndResponses.rejected",
        action.error.message
      );
      state.isLoading = false;
      state.error = action.error.message || "error fetching homeworks";
    });
  },
});

export default homeworkQuizSlice.reducer;

export const {
  nextHwQuestion,
  prevHwQuestion,
  submitHwAnswer,
  changeQuestionStatus,
} = homeworkQuizSlice.actions;

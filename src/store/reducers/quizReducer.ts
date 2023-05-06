// quizReducer redux toolkit boilerplate

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuestionStatus } from "../../constants/Quiz";
import { QuizQnAnswer } from "../../types/forms/QuizQnAnswer";
import { QnResponses } from "../../types/models/QnResponseModel";
import {
  Question,
  Questions,
  QuestionType,
  QuestionTypes,
} from "../../types/models/QuestionModel";
import { fetchQuiz } from "../thunks/fetchQuiz";

export interface QuizState {
  questions: Questions | null;
  questionIndex: number;
  currQuestion: Question | null;
  questionsTypes: QuestionTypes;
  currQuestionType: QuestionType | null;
  currQuestionStatus: QuestionStatus;
  responses: QnResponses | null;
  answers: QuizQnAnswer[];
  // solutionShown: boolean;
  // currQuestionAnswered: boolean;
  loaded: boolean;
  error: string | null;
}

const initialState: QuizState = {
  questions: null,
  currQuestion: null,
  questionsTypes: {
    allIds: [1],
    byId: {
      1: {
        id: 1,
        ref: "t1",
        label: "Choose the correct alternative",
      },
    },
  },
  responses: null,
  currQuestionType: null,
  questionIndex: 0,
  answers: [],
  currQuestionStatus: QuestionStatus.NotAnswered,
  loaded: false,
  error: null,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    changeResponse: (state, action: PayloadAction<string[]>) => {
      const res = action.payload;
      state.answer = res;
      state.currQuestionStatus =
        res.length > 0 ? QuestionStatus.InProgress : QuestionStatus.NotAnswered;
    },
    submitAnswer: (state, action: PayloadAction<QuizQnAnswer>) => {
      //todo: handle response submission
      state.answers = [...state.answers, action.payload];
    },
    nextQuestion: (state) => {
      if (
        state.questions &&
        state.questionIndex < state.questions.allIds.length - 1
      ) {
        const currQnId = state.questions?.allIds[state.questionIndex];
        const currQn = state.questions?.byId[currQnId];
        state.questionIndex++;
        state.currQuestion = currQn;
        state.currQuestionType = state.questionsTypes.byId[currQn.quizTypeId];
      }
    },
    previousQuestion: (state) => {
      if (state.questions && state.questionIndex > 0) {
        const currQnId = state.questions.allIds[state.questionIndex];
        const currQn = state.questions.byId[currQnId];
        state.questionIndex--;
        state.currQuestion = currQn;
        state.currQuestionType = state.questionsTypes.byId[currQn.quizTypeId];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuiz.pending, (state) => {
      state.loaded = true;
      state.error = null;
    });
    builder.addCase(
      fetchQuiz.fulfilled,
      (state, action: PayloadAction<FetchQuiz>) => {
        console.log("working correctly");
        const { quiz, responses: answers, questionTypes } = action.payload;
        const currQnId = quiz.allIds[0];
        const currQn = quiz.byId[currQnId];
        state.currQuestion = currQn;
        state.responses = answers;
        state.questions = quiz;
        state.questionsTypes = questionTypes;
        state.currQuestionType = state.questionsTypes.byId[currQn.quizTypeId];
        state.loaded = false;
        state.error = null;
      }
    );
    builder.addCase(fetchQuiz.rejected, (state, action) => {
      state.loaded = false;
      state.error = action.error.message || null;
    });
  },
});

export const { nextQuestion, previousQuestion, changeResponse } =
  quizSlice.actions;

//todo: create a separate file for async thunks actions
type FetchQuiz = {
  quiz: Questions;
  responses: QnResponses;
  questionTypes: QuestionTypes;
};

export default quizSlice.reducer;

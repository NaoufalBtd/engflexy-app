// quizReducer redux toolkit boilerplate

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";
import { QnsTypes, QuestionStatus } from "../../constants/Quiz";
import { QnResponse, QnResponses } from "../../types/models/QnResponseModel";
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
  questionsTypes: QuestionTypes | null;
  currQuestionType: QuestionType | null;
  currQuestionStatus: QuestionStatus;
  responses: QnResponses | null;
  answers: QnResponse["id"][] | string;
  // solutionShown: boolean;
  // currQuestionAnswered: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: QuizState = {
  questions: null,
  currQuestion: null,
  questionsTypes: null,
  responses: null,
  currQuestionType: null,
  questionIndex: 0,
  answers: [],
  currQuestionStatus: QuestionStatus.NotAnswered,
  isLoading: false,
  error: null,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    changeResponse: (state, action: PayloadAction<QnResponse["id"][]>) => {
      const res = action.payload;
      state.answers = res;
      state.currQuestionStatus =
        res.length > 0 ? QuestionStatus.InProgress : QuestionStatus.NotAnswered;
    },
    submitAnswer: (state) => {
      //todo: handle response submission
      const { currQuestionType: qnType, answers, responses } = state;
      if (qnType?.label === QnsTypes.qcm && answers instanceof Array) {
        state.currQuestionStatus = _.isEqual(
          answers,
          responses?.correctAnswersIds
        )
          ? QuestionStatus.AnsweredCorrectly
          : QuestionStatus.AnsweredIncorrectly;
      }
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
        state.currQuestionType =
          state.questionsTypes.byId[currQn.questionTypeId];
      }
    },
    previousQuestion: (state) => {
      if (state.questions && state.questionIndex > 0) {
        const currQnId = state.questions.allIds[state.questionIndex];
        const currQn = state.questions.byId[currQnId];
        state.questionIndex--;
        state.currQuestion = currQn;
        state.currQuestionType =
          state.questionsTypes.byId[currQn.questionTypeId];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuiz.pending, (state) => {
      state.isLoading = true;
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
        state.currQuestionType =
          state.questionsTypes.byId[currQn.questionTypeId];
        state.isLoading = false;
        state.error = null;
      }
    );
    builder.addCase(fetchQuiz.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || null;
    });
  },
});

export const { nextQuestion, previousQuestion, changeResponse, submitAnswer } =
  quizSlice.actions;

type FetchQuiz = {
  quiz: Questions;
  responses: QnResponses;
  questionTypes: QuestionTypes;
};

export default quizSlice.reducer;

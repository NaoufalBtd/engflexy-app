// quizReducer redux toolkit boilerplate

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import quiz from "../../assets/mock/quiz.json";
import { RootState } from "../store";
import { ApiQnAnswer } from "../types/api/ApiQnAnswer";
import { ApiQuestion } from "../types/api/ApiQuestion";
import { QnAnswer, QnAnswers } from "../types/models/QnAnswerModel";
import {
  Question,
  Questions,
  QuestionType,
  QuestionTypes,
} from "../types/models/QuestionModel";
import { normalizeQnAnswers, normalizeQuiz } from "../utils/normalizeUtils";
import { getFetcher } from "../utils/serverUtils";

export interface QuizState {
  quiz: Questions;
  questionsTypes: QuestionTypes;
  loading: boolean;
  error: string | null;
  questionIndex: number;
  currQuestion: Question | null;
  currQuestionType: QuestionType | null;
  answers: QnAnswers | null;
  currAnswer: QnAnswer | null;
}

const initialState: QuizState = {
  quiz: normalizeQuiz(quiz),
  currQuestion: null,
  questionsTypes: {
    allIds: [1],
    byId: {
      1: {
        id: 1,
        ref: "t1",
        lib: "Choose the correct alternative",
      },
    },
  },
  currAnswer: null,
  answers: null,
  currQuestionType: null,
  questionIndex: 0,
  loading: false,
  error: null,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    startQuiz: (state) => {
      state.loading = true;
      state.error = null;
    },
    getQuizSuccess: (state, action: PayloadAction<ApiQuestion[]>) => {
      const quiz = normalizeQuiz(action.payload);
      const currQnId = quiz.allIds[0];
      const currQn = quiz.byId[currQnId];
      state.quiz = quiz;
      state.currQuestion = currQn;
      state.currQuestionType = state.questionsTypes.byId[currQn.quizTypeId];
      state.loading = false;
      state.error = null;
    },
    getQuizFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    addQuestionType: (state, action: PayloadAction<QuestionType>) => {
      if (!state.questionsTypes.allIds.includes(action.payload.id)) {
        state.questionsTypes.allIds.push(action.payload.id);
      }
    },
    nextQuestion: (state) => {
      if (state.questionIndex < state.quiz.allIds.length - 1) {
        const currQnId = state.quiz.allIds[state.questionIndex];
        const currQn = state.quiz.byId[currQnId];
        state.questionIndex++;
        state.currQuestion = currQn;
        state.currQuestionType = state.questionsTypes.byId[currQn.quizTypeId];
      }
    },
    previousQuestion: (state) => {
      if (state.questionIndex > 0) {
        const currQnId = state.quiz.allIds[state.questionIndex];
        const currQn = state.quiz.byId[currQnId];
        state.questionIndex--;
        state.currQuestion = currQn;
        state.currQuestionType = state.questionsTypes.byId[currQn.quizTypeId];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuizAnswers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchQuizAnswers.fulfilled,
      (state, action: PayloadAction<FetchQuiz>) => {
        state.answers = action.payload.answers;
        state.loading = false;
        state.error = null;
      }
    );
    builder.addCase(fetchQuizAnswers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export const {
  startQuiz,
  getQuizSuccess,
  getQuizFailure,
  nextQuestion,
  previousQuestion,
} = quizSlice.actions;

//todo: create a separate file for async thunks actions
type FetchQuiz = {
  quiz: Questions;
  answers: QnAnswers;
};
const fetchQuizAnswers = createAsyncThunk(startQuiz.type, async () => {
  const fetchQns = getFetcher<ApiQuestion[]>("QUIZ_URL");
  const fetchAnswers = getFetcher<ApiQnAnswer[]>("ANSWERS_URL");

  const data = await Promise.all([fetchQns, fetchAnswers]);
  return {
    quiz: normalizeQuiz(data[0].data),
    answers: normalizeQnAnswers(data[1].data),
  };
});

export const selectQuiz = (state: RootState) => state.quiz.quiz;
export const selectQuizType = (state: RootState) => state.quiz.questionsTypes;
export const selectQuizTypeById = (state: RootState, id: number) => {
  if (!state.quiz.questionsTypes.byId[id]) return null;
  return state.quiz.questionsTypes.byId[id];
};

export default quizSlice.reducer;

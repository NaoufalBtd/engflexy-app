// quizReducer redux toolkit boilerplate

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuestionStatus } from "../../constants/Quiz";
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
  answerSubmitted: boolean;
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
  answerSubmitted: false,
  error: null,
};

export const quizSlice = createSlice({
  name: "lessonQuiz",
  initialState,
  reducers: {
    changeQuestionStatus: (state, action: PayloadAction<QuestionStatus>) => {
      state.currQuestionStatus = action.payload;
    },
    changeResponse: (state, action: PayloadAction<QnResponse["id"][]>) => {
      const res = action.payload;
      state.answers = res;
      state.currQuestionStatus =
        res.length > 0 ? QuestionStatus.InProgress : QuestionStatus.NotAnswered;
    },
    submitAnswer: (state) => {
      state.answerSubmitted = true;
    },
    nextQuestion: (state) => {
      const { questions, questionsTypes, questionIndex } = state;
      if (
        questions &&
        questionsTypes &&
        state.questionIndex < questions.allIds.length - 1
      ) {
        const currQnId = questions?.allIds[questionIndex];
        const currQn = questions?.byId[currQnId];
        state.questionIndex++;
        state.currQuestion = currQn;
        state.currQuestionStatus = QuestionStatus.NotAnswered;
        state.answerSubmitted = false;
        state.currQuestionType = questionsTypes.byId[currQn.questionTypeId];
      }
    },
    previousQuestion: (state) => {
      const { questions, questionsTypes, questionIndex } = state;

      if (questions && questionIndex > 0 && questionsTypes) {
        const currQnId = questions.allIds[questionIndex];
        const currQn = questions.byId[currQnId];
        state.questionIndex--;
        state.currQuestion = currQn;
        state.currQuestionStatus = QuestionStatus.NotAnswered;
        state.answerSubmitted = false;

        state.currQuestionType = questionsTypes.byId[currQn.questionTypeId];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuiz.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.currQuestionStatus = QuestionStatus.NotAnswered;
    });
    builder.addCase(
      fetchQuiz.fulfilled,
      (state, action: PayloadAction<FetchQuiz>) => {
        state.isLoading = false;

        const { quiz, responses: answers, questionTypes } = action.payload;
        if (quiz.allIds.length > 0) {
          const currQnId = quiz.allIds[0];
          const currQn = quiz.byId[currQnId];
          state.currQuestion = currQn;
          state.responses = answers;
          state.questions = quiz;
          state.questionsTypes = questionTypes;
          state.currQuestionType =
            state.questionsTypes.byId[currQn.questionTypeId];
          state.error = null;
        } else {
          state.error = "No questions found";
        }
      }
    );
    builder.addCase(fetchQuiz.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "error fetching quiz";
    });
  },
});

export const {
  nextQuestion,
  previousQuestion,
  changeResponse,
  submitAnswer,
  changeQuestionStatus,
} = quizSlice.actions;

type FetchQuiz = {
  quiz: Questions;
  responses: QnResponses;
  questionTypes: QuestionTypes;
};

export default quizSlice.reducer;

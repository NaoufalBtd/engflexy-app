// redux toolkit boilre platate homework

import { createSlice } from "@reduxjs/toolkit";
import { QuestionStatus } from "../../constants/Quiz";
import { Homeworks } from "../../types/models/HomeworkModel";
import { QnResponses } from "../../types/models/QnResponseModel";
import { QuestionTypes, Questions } from "../../types/models/QuestionModel";
import { fetchHomeworks } from "../thunks/homeworkThunk";

interface HomeworkState {
  homeworks: Homeworks | null;
  homeworkQuestions: Questions | null;
  homeworkResponses: QnResponses | null;
  currQuestionStatus: QuestionStatus;
  questionsTypes: QuestionTypes | null;
  homeworkIndex: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: HomeworkState = {
  isLoading: false,
  error: null,
  homeworkIndex: 0,
  homeworks: null,
  homeworkQuestions: null,
  homeworkResponses: null,
  currQuestionStatus: QuestionStatus.NotAnswered,
  questionsTypes: null,
};

const homeworkSlice = createSlice({
  name: "homework",
  initialState,
  reducers: {
    clear(state) {
      state.homeworks = null;
      state.homeworkQuestions = null;
      state.homeworkResponses = null;
      state.homeworkIndex = 0;
      state.isLoading = false;
      state.error = null;
    },
    nextHomework(state) {
      const { homeworks, homeworkIndex } = state;
      if (homeworks && homeworkIndex < homeworks.allIds.length - 1) {
        state.homeworkIndex += 1;
      }
    },
    previousHomework(state) {
      const { homeworkIndex } = state;
      if (homeworkIndex > 0) {
        state.homeworkIndex -= 1;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchHomeworks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchHomeworks.fulfilled, (state, action) => {
      const { homeworks, homeworkQns, homeworkResponses } = action.payload;
      console.log("in extra reducers ", homeworks);
      state.homeworkQuestions = homeworkQns;
      state.homeworkResponses = homeworkResponses;
      state.homeworks = homeworks;
      state.questionsTypes = action.payload.questionTypes;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchHomeworks.rejected, (state, action) => {
      console.log("is error--", action.error.message);
      state.isLoading = false;
      state.error = action.error.message || null;
    });
  },
});

export const { clear, nextHomework, previousHomework } = homeworkSlice.actions;

export default homeworkSlice.reducer;

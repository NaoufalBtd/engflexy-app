// redux toolkit boilre platate homework

import { createSlice } from "@reduxjs/toolkit";
import {
  Homework,
  HomeworkTypes,
  Homeworks,
} from "../../types/models/HomeworkModel";
import { RootState } from "../store";
import { fetchHomeworks } from "../thunks/homeworkThunk";

interface HomeworkState {
  homeworks: Homeworks | null;
  currHomework: Homework | null;
  homeworksTypes: HomeworkTypes | null;
  // homeworkIndex: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: HomeworkState = {
  isLoading: false,
  error: null,
  // homeworkIndex: 0,
  homeworksTypes: null,
  homeworks: null,
  currHomework: null,
};

const homeworkSlice = createSlice({
  name: "homework",
  initialState,
  reducers: {
    clear(state) {
      state.homeworks = null;
      state.currHomework = null;
      state.isLoading = false;
      state.error = null;
    },
    // changeQuestionStatus(state, action: PayloadAction<QuestionStatus>) {
    //   state.currQuestionStatus = action.payload;
    // },
    // submitAnswer(state) {
    //   state.answerSubmitted = true;
    // },
    // nextQuestion(state) {},
    // previousQuestion(state) {},
    nextHomework(state) {
      const { homeworks, currHomework } = state;
      if (homeworks && currHomework) {
        const currHomeworkIndex = homeworks.allIds.indexOf(currHomework.id);
        if (currHomeworkIndex < homeworks.allIds.length - 1) {
          const nextHomeworkId = homeworks.allIds[currHomeworkIndex + 1];
          state.currHomework = homeworks.byId[nextHomeworkId];
        }
      }
    },
    previousHomework(state) {
      const { homeworks, currHomework } = state;
      if (homeworks && currHomework) {
        const currHomeworkIndex = homeworks.allIds.indexOf(currHomework.id);
        if (currHomeworkIndex > 0) {
          const previousHomeworkId = homeworks.allIds[currHomeworkIndex - 1];
          state.currHomework = homeworks.byId[previousHomeworkId];
        }
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchHomeworks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchHomeworks.fulfilled, (state, action) => {
      const { homeworks, homeworkTypes } = action.payload;
      state.isLoading = false;
      state.homeworks = homeworks;
      state.homeworksTypes = homeworkTypes;
      state.currHomework = homeworks.byId[homeworks.allIds[0]];
      state.error = null;
    });
    builder.addCase(fetchHomeworks.rejected, (state, action) => {
      console.error("fetchHomeworks.rejected", action.error.message);
      state.isLoading = false;
      state.error = action.error.message || "error fetching homeworks";
    });
  },
});

export const selectNextHomeworkTitle = (state: RootState) => {
  const { homeworks, currHomework } = state.homework;
  if (homeworks && currHomework) {
    const currHomeworkIndex = homeworks.allIds.indexOf(currHomework.id);
    if (currHomeworkIndex < homeworks.allIds.length - 1) {
      return homeworks.byId[homeworks.allIds[currHomeworkIndex + 1]].label;
    }
  }
  return null;
};

export const selectPreviousHomeworkTitle = (state: RootState) => {
  const { homeworks, currHomework } = state.homework;
  if (homeworks && currHomework) {
    const currHomeworkIndex = homeworks.allIds.indexOf(currHomework.id);
    if (currHomeworkIndex > 0) {
      return homeworks.byId[homeworks.allIds[currHomeworkIndex - 1]].label;
    }
  }
  return null;
};

export const { previousHomework, nextHomework } = homeworkSlice.actions;

export default homeworkSlice.reducer;

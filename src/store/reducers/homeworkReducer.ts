// redux toolkit boilre platate homework

import { createSlice } from "@reduxjs/toolkit";
import { HomeworkQns, Homeworks } from "../../types/models/HomeworkModel";
import { QnResponses } from "../../types/models/QnResponseModel";
import { fetchHomeworks } from "../thunks/homeworkThunk";

interface HomeworkState {
  homeworks: Homeworks | null;
  homeworkQuestions: HomeworkQns | null;
  homeworkResponses: QnResponses | null;
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
  },
  extraReducers(builder) {
    builder.addCase(fetchHomeworks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchHomeworks.fulfilled, (state, action) => {
      const { homeworks, homeworkQns, homeworkResponses } = action.payload;
      state.homeworkQuestions = homeworkQns;
      state.homeworkResponses = homeworkResponses;
      state.isLoading = false;
      state.homeworks = homeworks;
    });
    builder.addCase(fetchHomeworks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || null;
    });
  },
});

export const { clear } = homeworkSlice.actions;

export default homeworkSlice.reducer;

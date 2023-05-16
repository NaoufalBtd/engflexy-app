// redux toolkit boilre platate homework

import { createSlice } from "@reduxjs/toolkit";
import { Homework, Homeworks } from "../../types/models/HomeworkModel";

interface HomeworkState {
  homeworks: Homeworks | null;
  currHomework: Homework | null;
  // homeworkIndex: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: HomeworkState = {
  isLoading: false,
  error: null,
  // homeworkIndex: 0,
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
});

export const {} = homeworkSlice.actions;

export default homeworkSlice.reducer;

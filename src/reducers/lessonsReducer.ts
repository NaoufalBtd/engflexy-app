// redux toolkit lessonReducer boilerplate
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import cours from "../../assets/mock/cours.json";
import { ApiLesson } from "../types/api/ApiLesson";
import { Lesson, Lessons } from "../types/models/lessonsModel";
import { normalizeLessons } from "../utils/normalizeUtils";

interface LessonsState {
  lesson: Lesson | null;
  lessons: Lessons;
  lessonIndex: number;
}

const initialState: LessonsState = {
  lesson: null,
  lessons: normalizeLessons(cours),
  lessonIndex: 0,
};

export const lessonsSlice = createSlice({
  name: "lesson",
  initialState,
  reducers: {
    setLesson: (state, action: PayloadAction<Lesson>) => {
      state.lesson = action.payload;
    },
    setLessons: (state, action: PayloadAction<ApiLesson[]>) => {
      const lessons = normalizeLessons(action.payload);
      state.lessons = lessons;
      state.lesson = lessons.byId[lessons.allIds[0]];
    },
    nextLesson: (state) => {
      if (state.lessonIndex < state.lessons.allIds.length - 1) {
        state.lessonIndex++;
        state.lesson =
          state.lessons.byId[state.lessons.allIds[state.lessonIndex]];
      }
    },
    previousLesson: (state) => {
      if (state.lessonIndex > 0) state.lessonIndex--;
    },
  },
  // extraReducers(builder) {
  //   builder.addCase("user/login", (state) => {
  //     state.lesson = "";
  //   });
  // },
});

export const { setLesson, nextLesson, previousLesson } = lessonsSlice.actions;

export default lessonsSlice.reducer;

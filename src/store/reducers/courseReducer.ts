// redux toolkit course reducer

import { createSlice } from "@reduxjs/toolkit";
import { Lessons } from "../../types/models/lessonModel";
import { fetchLessons } from "../thunks/lessonsThunks";

export interface CourseState {
  // courses: {
  //   byId: Record<number, Course>;
  //   allIds: number[];
  // };
  courseId: number | null;
  lessons: Lessons | null;
  loading: boolean;
  error: string | null;
}

const initialState: CourseState = {
  courseId: null,
  lessons: null,
  loading: false,
  error: null,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchLessons.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.lessons = null;
    });
    builder.addCase(fetchLessons.fulfilled, (state, action) => {
      state.loading = false;
      state.lessons = action.payload.lessons;
      state.courseId = action.payload.courseId;
    });
    builder.addCase(fetchLessons.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

// export const {} = courseSlice.actions;

export default courseSlice.reducer;

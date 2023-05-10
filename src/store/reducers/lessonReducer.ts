// redux toolkit lessonReducer boilerplate
import { createSlice } from "@reduxjs/toolkit";
import { ApiReqError } from "../../types/apisTypes";
import {
  LessonChapter,
  LessonChapters,
} from "../../types/models/lessonChapterModel";
import { fetchLessonChapters } from "../thunks/lessonsThunks";

interface LessonsState {
  lessonId: number | null;
  chapter: LessonChapter | null;
  chapterId: number | null;
  chapters: LessonChapters | null;
  chapterIndex: number;
  homeworkIndex: number;
  isLoading: boolean;
  error: ApiReqError | null;
}

const initialState: LessonsState = {
  lessonId: null,
  chapter: null,
  chapterId: null,
  chapters: null,
  chapterIndex: 0,
  homeworkIndex: 0,
  isLoading: false,
  error: null,
};

export const lessonsSlice = createSlice({
  name: "lesson",
  initialState,
  reducers: {
    nextLesson: (state) => {
      const { chapters, chapterIndex } = state;
      if (!chapters) return;

      const chaptersLastIndex = chapters.allIds.length - 1;
      if (chapterIndex < chaptersLastIndex) {
        state.chapterIndex++;
        state.chapter = chapters.byId[chapters.allIds[chapterIndex]];
      }
    },
    previousLesson: (state) => {
      if (state.chapterIndex > 0) state.chapterIndex--;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLessonChapters.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.chapters = null;
      state.chapter = null;
    });
    builder.addCase(fetchLessonChapters.fulfilled, (state, action) => {
      const { chapters, lessonId } = action.payload;
      state.isLoading = false;
      state.chapters = chapters;
      state.chapter = chapters.byId[chapters.allIds[0]];
      state.lessonId = parseInt(lessonId);
    });
    builder.addCase(fetchLessonChapters.rejected, (state, action) => {
      console.error(
        "error fetching lesson chapters with code: " +
          action.error.code +
          " and message: " +
          action.error.message
      );
      state.isLoading = false;
      state.error = {
        message: action.error.message || null,
        code: action.error.code || null,
      };
    });
  },
});

export const { nextLesson, previousLesson } = lessonsSlice.actions;

export default lessonsSlice.reducer;

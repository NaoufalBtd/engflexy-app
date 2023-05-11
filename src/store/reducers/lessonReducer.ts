// redux toolkit lessonReducer boilerplate
import { createSlice } from "@reduxjs/toolkit";
import { ApiReqError } from "../../types/apisTypes";
import {
  LessonChapter,
  LessonChapters,
} from "../../types/models/lessonChapterModel";
import { RootState } from "../store";
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
    nextChapter: (state) => {
      const { chapters, chapterIndex } = state;
      if (!chapters) return;

      const chaptersLastIndex = chapters.allIds.length - 1;
      if (chapterIndex < chaptersLastIndex) {
        state.chapterIndex++;
        state.chapter = chapters.byId[chapters.allIds[chapterIndex]];
      }
    },
    previousChapter: (state) => {
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

export const { nextChapter, previousChapter } = lessonsSlice.actions;

export const selectNextChapterTitle = (state: RootState) => {
  const { chapters, chapterIndex } = state.lessons;
  if (!chapters) return null;

  const chaptersLastIndex = chapters.allIds.length - 1;
  if (chapterIndex < chaptersLastIndex) {
    return chapters.byId[chapters.allIds[chapterIndex + 1]].label;
  }

  return null;
};

export const selectPreviousChapterTitle = (state: RootState) => {
  const { chapters, chapterIndex } = state.lessons;
  if (!chapters) return null;

  if (chapterIndex > 0) {
    return chapters.byId[chapters.allIds[chapterIndex - 1]].label;
  }

  return null;
};

export default lessonsSlice.reducer;
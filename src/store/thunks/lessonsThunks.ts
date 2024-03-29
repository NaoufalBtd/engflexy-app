import { createAsyncThunk } from "@reduxjs/toolkit";
import { getChaptersUrl, getLessonsUrl } from "../../constants/ApiUrls";
import { ApiLesson } from "../../types/api/ApiLesson";
import { ApiLessonChapter } from "../../types/api/ApiLessonChapter";
import {
  normalizeLessonChapters,
  normalizeLessons,
} from "../../utils/normalizeUtils";
import { getFetcher } from "../../utils/serverUtils";

export const fetchLessons = createAsyncThunk(
  "lessons/fetchLessons",
  async (courseId: number) => {
    const res = await getFetcher<ApiLesson[]>(getLessonsUrl(courseId));
    return { lessons: normalizeLessons(res.data), courseId };
  }
);

export const fetchLessonChapters = createAsyncThunk(
  "lessons/fetchLessonChapters",
  async (lessonId: string) => {
    const res = await getFetcher<ApiLessonChapter[]>(getChaptersUrl(lessonId));
    return { chapters: normalizeLessonChapters(res.data), lessonId };
  }
);

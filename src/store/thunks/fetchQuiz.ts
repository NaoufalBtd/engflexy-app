import { createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";
import {
  getLessonQuizQnResponses,
  getLessonQuizUrl,
} from "../../constants/ApiUrls";
import { ApiQnResponse } from "../../types/api/ApiQnResponse";
import { ApiQuestion } from "../../types/api/ApiQuestion";
import {
  normalizeQnResponse,
  normalizeQnsTypes,
  normalizeQuiz,
} from "../../utils/normalizeUtils";
import { getFetcher } from "../../utils/serverUtils";

export const fetchQuiz = createAsyncThunk(
  "quiz/fetchQuiz",
  async (lessonId: number) => {
    const questions = await getFetcher<ApiQuestion[]>(
      getLessonQuizUrl(lessonId)
    );
    const qnsData = questions.data;
    // if (qnsData.length === 0) {
    //   throw new Error("No questions found");
    // }
    const qnTypes = qnsData.map((qn) => qn.typeDeQuestion);

    const responses = await Promise.all(
      qnsData.map((qn) =>
        getFetcher<ApiQnResponse[]>(getLessonQuizQnResponses(qn.id))
      )
    );
    const responsesData = _.flatMap(responses, (res) => res.data);

    return {
      quiz: normalizeQuiz(qnsData),
      responses: normalizeQnResponse(responsesData),
      questionTypes: normalizeQnsTypes(qnTypes),
    };
  }
);

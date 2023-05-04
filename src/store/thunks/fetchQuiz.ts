import { createAsyncThunk } from "@reduxjs/toolkit";
import answers from "../../../assets/mock/qnAnswer.json";
import quiz from "../../../assets/mock/quiz.json";
import {
  normalizeQnResponse,
  normalizeQnsTypes,
  normalizeQuiz,
} from "../../utils/normalizeUtils";

export const fetchQuiz = createAsyncThunk("quiz/fetchQuiz", async () => {
  // const fetchQns = getFetcher<ApiQuestion[]>("QUIZ_URL");
  // const fetchAnswers = getFetcher<ApiQnAnswer[]>("ANSWERS_URL");

  // const data = await Promise.all([fetchQns, fetchAnswers]);
  // return {
  //   quiz: normalizeQuiz(data[0].data),
  //   answers: normalizeQnAnswers(data[1].data),
  // };

  //---------- MOCK DATA ----------------
  const questionTypes = quiz.map((q) => q.typeDeQuestion);
  return {
    quiz: normalizeQuiz(quiz),
    responses: normalizeQnResponse(answers),
    questionTypes: normalizeQnsTypes(questionTypes),
  };
});

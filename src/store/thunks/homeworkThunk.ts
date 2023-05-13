import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHomeworkQnResponses,
  getHomeworkQnsUrl,
  getHomeworksUrl,
} from "../../constants/ApiUrls";
import { ApiHomework } from "../../types/api/ApiHomework";
import { ApiHomeworkQn } from "../../types/api/ApiHomeworkQn";
import { ApiHomeworkResponse } from "../../types/api/ApiHomeworkResponse";
import {
  normalizeHomework,
  normalizeHomeworkQn,
  normalizeHomeworkQnResponse,
  normalizeQnsTypes,
} from "../../utils/normalizeUtils";
import { getFetcher } from "../../utils/serverUtils";

export const fetchHomeworks = createAsyncThunk(
  "homework/fetchHomeworks",
  async (lessonId: number) => {
    const response = await getFetcher<ApiHomework[]>(getHomeworksUrl(lessonId));
    const homeworksData = response.data;
    console.log("homework Data : ", homeworksData);

    const qnRes = await Promise.all(
      homeworksData.map((homework) =>
        getFetcher<ApiHomeworkQn>(getHomeworkQnsUrl(homework.id))
      )
    );
    const qnData = qnRes.map((res) => res.data);
    const qnTypes = qnData.map((qn) => qn.typeDeQuestion);

    const responseRes = await Promise.all(
      qnData.map((qn) =>
        getFetcher<ApiHomeworkResponse>(getHomeworkQnResponses(qn.id))
      )
    );
    const responseData = responseRes.map((res) => res.data);

    return {
      homeworks: normalizeHomework(homeworksData),
      homeworkQns: normalizeHomeworkQn(qnData),
      homeworkResponses: normalizeHomeworkQnResponse(responseData),
      questionTypes: normalizeQnsTypes(qnTypes),
    };
  }
);

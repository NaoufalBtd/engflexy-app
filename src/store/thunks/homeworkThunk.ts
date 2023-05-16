import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHomeworksContentUrl,
  getHomeworksUrl,
} from "../../constants/ApiUrls";
import { ApiHomework } from "../../types/api/ApiHomework";
import { getFetcher } from "../../utils/serverUtils";

export const fetchHomeworks = createAsyncThunk(
  "homework/fetchHomeworks",
  async (lessonId: number) => {
    const response = await getFetcher<ApiHomework[]>(getHomeworksUrl(lessonId));
    const homeworksData = response.data;

    const homeworks = await Promise.all(
      homeworksData.map((homework) =>
        getFetcher(getHomeworksContentUrl(homework.id))
      )
    );

    // const qnRes = await Promise.all(
    //   homeworksData.map((homework) =>
    //     getFetcher<ApiHomeworkQn>(getHomeworkQuizUrl(homework.id))
    //   )
    // );
    // const qnData = qnRes.map((res) => res.data);
    // const qnTypes = qnData.map((qn) => qn.typeDeQuestion);

    // const responseRes = await Promise.all(
    //   qnData.map((qn) =>
    //     getFetcher<ApiHomeworkResponse>(getHomeworkQuizResponses(qn.id))
    //   )
    // );
    // const responseData = responseRes.map((res) => res.data);

    // return {
    //   homeworks: normalizeHomework(homeworksData),
    //   homeworkQns: normalizeHomeworkQn(qnData),
    //   homeworkResponses: normalizeHomeworkQnResponse(responseData),
    //   questionTypes: normalizeQnsTypes(qnTypes),
    // };
  }
);

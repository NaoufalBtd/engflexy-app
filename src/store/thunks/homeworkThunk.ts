import { createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";
import {
  getHomeworkQuizResponses,
  getHomeworkQuizUrl,
  getHomeworksUrl,
  getStudentSaveHomeworkAnswer,
  getStudentSaveHomeworkUrl,
} from "../../constants/ApiUrls";
import { ApiHomework } from "../../types/api/ApiHomework";
import { ApiHomeworkQn } from "../../types/api/ApiHomeworkQn";
import { ApiHomeworkResponse } from "../../types/api/ApiHomeworkResponse";
import { ApiStudentHomeWork } from "../../types/api/ApiStudentHomeWork";
import { ApiStudentHomeWorkAnswer } from "../../types/api/ApiStudentHomeWorkAnswer";
import { StudentHomeworkForm } from "../../types/forms/StudentHomework";
import StudentHwAnswerForm from "../../types/forms/StudentHwAnswerForm";
import {
  normalizeHomework,
  normalizeHomeworkQn,
  normalizeHomeworkQnResponse,
  normalizeHomeworkTypes,
  normalizeQnsTypes,
} from "../../utils/normalizeUtils";
import { getFetcher, postFetcher } from "../../utils/serverUtils";

export const fetchHomeworks = createAsyncThunk(
  "homework/fetchHomeworks",
  async (lessonId: number) => {
    const response = await getFetcher<ApiHomework[]>(getHomeworksUrl(lessonId));
    const homeworksData = response.data;

    if (homeworksData.length === 0)
      throw new Error(`Reason: No homeworks found. timestamp: ${Date.now()}`);

    const homeworkTypes = homeworksData.map((hw) => hw.typeHomeWork);
    return {
      homeworks: normalizeHomework(homeworksData),
      homeworkTypes: normalizeHomeworkTypes(homeworkTypes),
    };

    // return {
    //   homeworks: normalizeHomework(homeworksData),
    //   homeworkQns: normalizeHomeworkQn(qnData),
    //   homeworkResponses: normalizeHomeworkQnResponse(responseData),
    //   questionTypes: normalizeQnsTypes(qnTypes),
    // };
  }
);

export const fetchHomeworkQnsAndResponses = createAsyncThunk(
  "homework/fetchHomeworkQuestions",
  async (homeworkId: number) => {
    const questionsRes = await getFetcher<ApiHomeworkQn[]>(
      getHomeworkQuizUrl(homeworkId)
    );
    const questionsData = questionsRes.data;

    if (questionsData.length === 0)
      throw new Error(
        `fetchHomeworkQnsAndResponses Func: No questions found, timestamp: ${Date.now()}`
      );

    const questionsTypes = questionsData.map((qn) => qn.typeDeQuestion);
    console.log(questionsData);
    const responseRes = await Promise.all(
      questionsData.map((qn) =>
        getFetcher<ApiHomeworkResponse[]>(getHomeworkQuizResponses(qn.id))
      )
    );
    const responsesData = _.flatMap(responseRes, (res) => res.data);

    return {
      questions: normalizeHomeworkQn(questionsData),
      responses: normalizeHomeworkQnResponse(responsesData),
      questionTypes: normalizeQnsTypes(questionsTypes),
    };
  }
);

export const submitHomework = createAsyncThunk(
  "homework/submitHomework",
  async (homeworkId: number) => {
    const savedStudentHomework = await postFetcher<
      StudentHomeworkForm,
      ApiStudentHomeWork
    >(getStudentSaveHomeworkUrl(), {
      date: new Date().toISOString(),
      homeWork: { id: 0 },
      etudiant: { id: 0 },
    });

    await postFetcher<StudentHwAnswerForm, ApiStudentHomeWorkAnswer>(
      getStudentSaveHomeworkAnswer(),
      {
        answer: "",
        homeWorkEtudiant: savedStudentHomework.data,
        question: { id: 0 },
      }
    );
  }
);

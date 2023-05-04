import { ApiLesson } from "../types/api/ApiLesson";
import { ApiQnResponse } from "../types/api/ApiQnResponse";
import { ApiQuestion } from "../types/api/ApiQuestion";
import { QnResponse, QnResponses } from "../types/models/QnResponseModel";
import {
  Question,
  QuestionType,
  QuestionTypes,
  Questions,
} from "../types/models/QuestionModel";
import { Lesson } from "../types/models/lessonsModel";

export const normalizeLessons = (lessons: ApiLesson[]) => {
  const allIds: number[] = [];
  const byId = lessons.reduce((acc, lesson) => {
    acc[lesson.id] = {
      id: lesson.id,
      code: lesson.code,
      label: lesson.libelle,
      imageUrl: lesson.urlImage,
      imageUrl2: lesson.urlImage2,
      imageUrl3: lesson.urlImage3,
      videoUrl: lesson.urlVideo,
      content: lesson.contenu,
      questions: lesson.questions,
      indicationProf: lesson.indicationProf,
      numeroOrder: lesson.numeroOrder,
      contentNum: lesson.content,
      categorySection: {
        id: lesson.categorieSection.id,
        code: lesson.categorieSection.code,
        label: lesson.categorieSection.libelle,
      },
    };
    allIds.push(lesson.id);
    return acc;
  }, {} as { [key: string]: Lesson });

  return { allIds, byId };
};

export const normalizeQuiz = (quiz: ApiQuestion[]): Questions => {
  const allIds: number[] = [];
  const byId = quiz.reduce((acc, quiz) => {
    acc[quiz.id] = {
      id: quiz.id,
      ref: quiz.ref,
      label: quiz.libelle,
      number: quiz.numero,
      pointRightAnswer: quiz.pointReponseJuste,
      pointWrongAnswer: quiz.pointReponsefausse,
      quizTypeId: quiz.typeDeQuestion.id,
    };
    allIds.push(quiz.id);
    return acc;
  }, {} as { [key: string]: Question });

  return { allIds, byId };
};

export const normalizeQnResponse = (
  qnAnswers: ApiQnResponse[]
): QnResponses => {
  const allIds: number[] = [];
  const correctAnswersIds: number[] = [];
  const byId = qnAnswers.reduce((acc, qnAnswer) => {
    acc[qnAnswer.id] = {
      id: qnAnswer.id,
      label: qnAnswer.lib,
      isCorrect: qnAnswer.etatReponse === "true",
      questionId: qnAnswer.question.id,
    };
    allIds.push(qnAnswer.id);
    if (qnAnswer.etatReponse === "true") {
      correctAnswersIds.push(qnAnswer.id);
    }
    return acc;
  }, {} as { [key: string]: QnResponse });

  return { allIds, byId, correctAnswersIds };
};

export const normalizeQnsTypes = (
  qnTypes: ApiQuestion["typeDeQuestion"][]
): QuestionTypes => {
  const allIds: number[] = [];
  const byId = qnTypes.reduce((acc, qnType) => {
    acc[qnType.id] = {
      id: qnType.id,
      ref: qnType.ref,
      label: qnType.lib,
    };
    allIds.push(qnType.id);
    return acc;
  }, {} as { [key: string]: QuestionType });

  return { allIds, byId };
};

import { ApiHomework } from "../types/api/ApiHomework";
import { ApiHomeworkQn } from "../types/api/ApiHomeworkQn";
import { ApiHomeworkResponse } from "../types/api/ApiHomeworkResponse";
import { ApiLesson } from "../types/api/ApiLesson";
import { ApiLessonChapter } from "../types/api/ApiLessonChapter";
import { ApiQnResponse } from "../types/api/ApiQnResponse";
import { ApiQuestion } from "../types/api/ApiQuestion";
import { ApiVocabulary } from "../types/api/ApiVocabulary";
import {
  Homework,
  HomeworkQn,
  HomeworkQns,
  Homeworks,
} from "../types/models/HomeworkModel";
import { QnResponse, QnResponses } from "../types/models/QnResponseModel";
import {
  Question,
  QuestionType,
  QuestionTypes,
  Questions,
} from "../types/models/QuestionModel";
import { Vocabularies, Vocabulary } from "../types/models/VocabularyModel";
import { LessonChapter } from "../types/models/lessonChapterModel";
import { Lesson, Lessons } from "../types/models/lessonModel";

export const normalizeLessons = (lessons: ApiLesson[]): Lessons => {
  const allIds: number[] = [];
  const byId = lessons.reduce((acc, lesson) => {
    acc[lesson.id] = {
      id: lesson.id,
      code: lesson.code,
      label: lesson.libelle,
      image: lesson.image,
      courseState: lesson.etatCours,
      numberOfLinksInProgress: lesson.nombreLinkEnCours,
      numberOfLinksCompleted: lesson.nombreLinkFinalise,
      numberOfSectionsInProgress: lesson.nombreSectionEnCours,
      numberOfSectionsCompleted: lesson.nombreSectionFinalise,
      orderNumber: lesson.numeroOrder,
      courseId: lesson.parcours.id,
    };
    allIds.push(lesson.id);
    return acc;
  }, {} as Record<number, Lesson>);

  return { allIds, byId };
};

export const normalizeLessonChapters = (ch: ApiLessonChapter[]) => {
  const allIds: number[] = [];
  const byId = ch.reduce((acc, lesson) => {
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
  }, {} as { [key: string]: LessonChapter });

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

export const normalizeVocs = (vocs: ApiVocabulary[]): Vocabularies => {
  const allIds: number[] = [];
  const byId = vocs.reduce((acc, voc) => {
    acc[voc.id] = {
      image: voc.imageUrl,
      id: voc.id,
      response: voc.response,
      transcription: voc.transcription,
      translation: voc.translation,
      synonyms: voc.synonyms,
      explanation: voc.explanation,
      example: voc.example,
    };
    allIds.push(voc.id);
    return acc;
  }, {} as Record<number, Vocabulary>);
  return { allIds, byId };
};

export const normalizeHomework = (homeworks: ApiHomework[]): Homeworks => {
  const allIds: number[] = [];
  const byId = homeworks.reduce((acc, homework) => {
    acc[homework.id] = {
      id: homework.id,
      label: homework.libelle,
      imageUrl: homework.urlImage,
      videoUrl: homework.urlVideo,
      homeworkTypeId: homework.typeHomeWork.id,
    };
    allIds.push(homework.id);
    return acc;
  }, {} as Record<number, Homework>);
  return { allIds, byId };
};

export const normalizeHomeworkQn = (
  homeworkQns: ApiHomeworkQn[]
): HomeworkQns => {
  const allIds: number[] = [];
  const byId = homeworkQns.reduce((acc, homeworkQn) => {
    acc[homeworkQn.id] = {
      id: homeworkQn.id,
      label: homeworkQn.libelle,
      number: homeworkQn.numero,
      pointRightAnswer: homeworkQn.pointReponseJuste,
      pointWrongAnswer: homeworkQn.pointReponsefausse,
      ref: homeworkQn.ref,
      homeworkId: homeworkQn.homeWork.id,
    };
    allIds.push(homeworkQn.id);
    return acc;
  }, {} as Record<number, HomeworkQn>);
  return { allIds, byId };
};

export const normalizeHomeworkQnResponse = (
  homeWorkQnResponse: ApiHomeworkResponse[]
): QnResponses => {
  const allIds: number[] = [];
  const correctAnswersIds: number[] = [];
  const byId = homeWorkQnResponse.reduce((acc, qnAnswer) => {
    acc[qnAnswer.id] = {
      id: qnAnswer.id,
      label: qnAnswer.lib,
      isCorrect: qnAnswer.etatReponse === "true",
      questionId: qnAnswer.homeWorkQuestion.id,
    };
    allIds.push(qnAnswer.id);
    if (qnAnswer.etatReponse === "true") {
      correctAnswersIds.push(qnAnswer.id);
    }
    return acc;
  }, {} as { [key: string]: QnResponse });

  return { allIds, byId, correctAnswersIds };
};

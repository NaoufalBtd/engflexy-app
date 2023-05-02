import { ApiLesson } from "../types/api/ApiLesson";
import { ApiQnAnswer } from "../types/api/ApiQnAnswer";
import { ApiQuestion } from "../types/api/ApiQuestion";
import { QnAnswer, QnAnswers } from "../types/models/QnAnswerModel";
import { Question, Questions } from "../types/models/QuestionModel";
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

export const normalizeQnAnswers = (qnAnswers: ApiQnAnswer[]): QnAnswers => {
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
  }, {} as { [key: string]: QnAnswer });

  return { allIds, byId, correctAnswersIds };
};

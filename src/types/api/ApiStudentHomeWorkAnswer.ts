import { ApiHomeworkQn } from "./ApiHomeworkQn";
import { ApiHomeworkResponse } from "./ApiHomeworkResponse";
import { ApiStudentHomeWork } from "./ApiStudentHomeWork";

export type ApiStudentHomeWorkAnswer = {
  id: number;
  answer: string;
  reponse: ApiHomeworkResponse;
  homeWorkEtudiant: ApiStudentHomeWork;
  question: ApiHomeworkQn;
  profNote: string;
  note: number;
};

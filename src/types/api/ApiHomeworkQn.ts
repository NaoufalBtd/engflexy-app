import { ApiHomework } from "./ApiHomework";
import { ApiQuestionType } from "./ApiQuestionType";

export type ApiHomeworkQn = {
  id: number;
  libelle: string;
  numero: number;
  pointReponseJuste: number;
  pointReponsefausse: number;
  ref: string;
  typeDeQuestion: ApiQuestionType;
  homeWork: ApiHomework;
};

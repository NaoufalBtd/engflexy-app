import { ApiQuestionType } from "./ApiQuestionType";

export type ApiQuestion = {
  id: number;
  ref: string | null;
  libelle: string;
  numero: number;
  pointReponseJuste: number;
  pointReponsefausse: number;
  typeDeQuestion: ApiQuestionType;
};

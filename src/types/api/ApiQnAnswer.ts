import { ApiQuestion } from "./ApiQuestion";

export type ApiQnAnswer = {
  id: number;
  etatReponse: "true" | "false";
  lib: string;
  numero: number;
  ref: string | null;
  question: ApiQuestion;
};

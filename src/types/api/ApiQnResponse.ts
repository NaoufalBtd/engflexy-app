import { ApiQuestion } from "./ApiQuestion";

export type ApiQnResponse = {
  id: number;
  etatReponse: "true" | "false" | string;
  lib: string;
  numero: number;
  ref: string | null;
  question: ApiQuestion;
};

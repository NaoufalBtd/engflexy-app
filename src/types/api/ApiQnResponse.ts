import { ApiQuestion } from "./ApiQuestion";

export interface ApiQnResponse {
  id: number;
  etatReponse: "true" | "false" | string;
  lib: string;
  numero: number;
  ref: string | null;
  question: ApiQuestion;
}

import { ApiHomeworkQn } from "./ApiHomeworkQn";
import { ApiQnResponse } from "./ApiQnResponse";

export interface ApiHomeworkResponse extends Omit<ApiQnResponse, "question"> {
  homeWorkQuestion: ApiHomeworkQn;
}

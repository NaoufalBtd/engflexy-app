import { ApiHomework } from "./ApiHomeworkOther";

export type ApiStudentHomeWork = {
  id: number;
  homeWork: ApiHomework;
  note: number;
  result: string;
  data: string;
};

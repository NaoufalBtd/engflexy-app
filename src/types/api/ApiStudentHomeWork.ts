import { ApiEtudiant } from "./ApiEtudiant";
import { ApiHomework } from "./ApiHomework";

export type ApiStudentHomeWork = {
  id: number;
  homeWork: ApiHomework;
  etudiant: ApiEtudiant;
  note: number;
  result: string;
  date: string;
};

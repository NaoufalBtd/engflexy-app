import { ApiEtudiant } from "../api/ApiEtudiant";
import { ApiHomework } from "../api/ApiHomework";
import { requireOnly } from "../utilities";

export interface StudentHomeworkForm {
  date: string;
  etudiant: requireOnly<ApiEtudiant, "id">;
  homeWork: requireOnly<ApiHomework, "id">;
}

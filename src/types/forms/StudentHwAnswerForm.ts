import { ApiQuestion } from "../api/ApiQuestion";
import { ApiStudentHomeWork } from "../api/ApiStudentHomeWork";
import { requireOnly } from "../utilities";

export default interface StudentHwAnswerForm {
  answer: string;
  homeWorkEtudiant: requireOnly<ApiStudentHomeWork, "id">;
  question: requireOnly<ApiQuestion, "id">;
}

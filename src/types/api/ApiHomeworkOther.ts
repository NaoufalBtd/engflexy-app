import { ApiCours } from "./ApiCourse";
import { ApiQuestion } from "./ApiQuestion";
import { ApiQuestionType } from "./ApiQuestionType";
import { ApiStudentHomeWork } from "./ApiStudentHomeWork";

export type ApiHomeworkOther = {
  id: number;
  libelle: string;
  urlImage: string;
  urlVideo: string;
  questions: ApiQuestion[];
  homeWorkEtudiant: ApiStudentHomeWork[];
  cours: ApiCours[];
  typeHomeWork: ApiQuestionType[];
};

import { ApiCours } from "./ApiCourse";
import { ApiHomeworkType } from "./ApiHomeworkType";

export type ApiHomework = {
  id: number;
  libelle: string;
  urlImage: string;
  urlVideo: string;
  typeHomeWork: ApiHomeworkType;
  cours: ApiCours[];
};

import { ApiCours } from "./ApiCourse";

export type ApiCoursSection = {
  id: number;
  code: string;
  libelle: string;
  urlImage: string;
  contenu: string;
  questions: null;
  url: string;
  cours: ApiCours;
  categorieSection: unknown;
};

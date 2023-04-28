import { ApiCoursSection } from "./ApiCoursSection";

export type ApiCategorieSection = {
  id: number;
  code: string;
  libelle: string;
  numeroOrder: number;
  sections?: ApiCoursSection[];
};

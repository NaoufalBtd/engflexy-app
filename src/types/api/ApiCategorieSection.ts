import { ApiSuperCategorySection } from "./ApiSuperCategorySection";

export type ApiCategorieSection = {
  id: number;
  code: string;
  libelle: string;
  numeroOrder: number;
  superCategorieSection?: ApiSuperCategorySection;
};

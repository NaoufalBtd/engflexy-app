import { ApiParcours } from "./ApiParcours";

export type ApiLesson = {
  id: number;
  code: string;
  libelle: string;
  image: string;
  etatCours: string;
  nombreLinkEnCours: number;
  nombreLinkFinalise: number;
  nombreSectionEnCours: number;
  nombreSectionFinalise: number;
  numeroOrder: number;
  parcours: ApiParcours;
};

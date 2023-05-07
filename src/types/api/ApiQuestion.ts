import { QnsTypes } from "../../constants/Quiz";

export type ApiQuestion = {
  id: number;
  ref: string | null;
  libelle: string;
  numero: number;
  pointReponseJuste: number;
  pointReponsefausse: number;
  typeDeQuestion: {
    id: number;
    ref: string | null;
    lib: QnsTypes;
  };
};

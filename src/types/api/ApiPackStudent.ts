import { ApiPrice } from "./ApiPrice";

export type ApiPackStudent = {
  id: number;
  libelle: string;
  code: string;
  nombreCours: number;
  description: string | null;
  price: ApiPrice;
};

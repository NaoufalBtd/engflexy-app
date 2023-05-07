import { ApiParcours } from "../api/ApiPatcours";
import { requireOnly } from "../utilities";

export type RegisterForm = {
  nom: string;
  prenom: string;
  username: string;
  numero: string;
  password: string;
  parcours: requireOnly<ApiParcours, "id">;
};

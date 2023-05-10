import { ApiParcours } from "../api/ApiParcours";
import { requireOnly } from "../utilities";

export type RegisterForm = {
  nom: string;
  prenom: string;
  username: string;
  numero: string;
  password: string;
  parcours: requireOnly<ApiParcours, "id">;
};

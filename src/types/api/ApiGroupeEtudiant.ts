import { ApiEtudiant } from "./ApiEtudiant";
import { ApiParcours } from "./ApiPatcours";
import { ApiProf } from "./ApiProf";

export type ApiGroupeEtudiant = {
  id: number;
  libelle: string;
  dataDebut: string | null;
  dateFin: string | null;
  niveau: string | null;
  parcours: ApiParcours;
  prof: ApiProf;
  etudiant: ApiEtudiant;
};

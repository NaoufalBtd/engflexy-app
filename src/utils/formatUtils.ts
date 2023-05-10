import { ApiParcours } from "../types/api/ApiParcours";
import { ApiUser } from "../types/api/ApiUser";
import { UserModel } from "../types/models/UserModel";
import { toCamelCase } from "./textUtils";

export const formatUser = (user: ApiUser): UserModel => ({
  ...user,
  firstName: user.prenom,
  lastName: user.nom,
  address: user.addresse,
  dateOfBirth: user.dateNaissance,
  phoneNumber: user.numero,
  city: user.ville,
});

export const formatCourse = (data: ApiParcours[]) => {
  return data.map((parcours) => ({
    id: parcours.id,
    code: parcours.code,
    label: parcours.libelle,
    lessonsNumber: parcours.numeroCours,
    title: toCamelCase(parcours.libelle.replace(/\d /g, "")),
  }));
};

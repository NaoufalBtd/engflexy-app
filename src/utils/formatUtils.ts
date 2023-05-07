import { ApiUser } from "../types/api/ApiUser";
import { UserModel } from "../types/models/UserModel";

export const formatUser = (user: ApiUser): UserModel => ({
  ...user,
  firstName: user.prenom,
  lastName: user.nom,
  address: user.addresse,
  dateOfBirth: user.dateNaissance,
  phoneNumber: user.numero,
  city: user.ville,
});

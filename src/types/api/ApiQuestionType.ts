import { QnsTypes } from "../../constants/Quiz";

export type ApiQuestionType = {
  id: number;
  ref: string | null;
  lib: QnsTypes;
};

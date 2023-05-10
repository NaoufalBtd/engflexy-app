import { ApiVocabulary } from "../api/ApiVocabulary";

export interface Vocabulary extends Omit<ApiVocabulary, "imageUrl"> {
  image: string;
}

export interface Vocabularies {
  byId: Record<number, Vocabulary>;
  allIds: number[];
}

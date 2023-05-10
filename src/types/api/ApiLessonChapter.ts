export type ApiLessonChapter = {
  id: number;
  code: string | null;
  libelle: string;
  urlImage: string | null;
  urlImage2: string | null;
  urlImage3: string | null;
  urlVideo: string | null;
  contenu: string | null;
  questions: any;
  indicationProf: null;
  numeroOrder: number;
  content: number;
  categorieSection: {
    id: number;
    code: string;
    libelle: string;
  };
};

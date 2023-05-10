export type LessonChapters = {
  allIds: number[];
  byId: { [key: string]: LessonChapter };
};

export type LessonChapter = {
  id: number;
  code: string | null;
  label: string;
  imageUrl: string | null;
  imageUrl2: string | null;
  imageUrl3: string | null;
  videoUrl: string | null;
  content: string | null;
  questions: any;
  indicationProf: null;
  numeroOrder: number;
  contentNum: number;
  categorySection: {
    id: number;
    code: string;
    label: string;
  };
};

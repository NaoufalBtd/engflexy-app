export type Course = {
  id: number;
  code: string;
  label: string;
  lessonsNumber: number;
  title: string;
};

export type Courses = {
  byId: Record<number, Course>;
  allIds: number[];
};

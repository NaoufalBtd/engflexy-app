import { Course } from "./CourseModel";

export type Lesson = {
  id: number;
  code: string;
  label: string;
  image: string;
  courseState: string;
  numberOfLinksInProgress: number;
  numberOfLinksCompleted: number;
  numberOfSectionsInProgress: number;
  numberOfSectionsCompleted: number;
  orderNumber: number;
  courseId: Course["id"];
};

export type Lessons = {
  allIds: number[];
  byId: Record<Lesson["id"], Lesson>;
};

const BASE_URL = "https://engflexy.ma/app";

// Auth URLs
export const LOGIN_URL = `${BASE_URL}/etudiant/user/login`;
export const REGISTER_URL = `${BASE_URL}/etudiant/user/`;

// Course URLs
export const PARCOURS_URL = `${BASE_URL}/admin/parcours/`;
export const FETCH_LESSONS_URL = `${BASE_URL}/prof/cours/parcours/id/13000`;
export const getLessonsUrl = (courseId: string) =>
  `${BASE_URL}/prof/cours/parcours/id/${courseId}`;
export const getChaptersUrl = (lessonId: string) =>
  `${BASE_URL}/prof/section/cours/id/${lessonId}`;

export const getVocabulary = (chapterId: number) =>
  `${BASE_URL}/admin/sectionItem/sectionId/${chapterId}`;

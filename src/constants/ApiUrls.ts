const BASE_URL = "https://engflexy.ma/app";

// Auth URLs
export const LOGIN_URL = `${BASE_URL}/etudiant/user/login`;
export const REGISTER_URL = `${BASE_URL}/etudiant/user/`;

// Course URLs
export const PARCOURS_URL = `${BASE_URL}/admin/parcours/`;
export const FETCH_LESSONS_URL = `${BASE_URL}/prof/cours/parcours/id/13000`;
export const getLessonsUrl = (courseId: number) =>
  `${BASE_URL}/prof/cours/parcours/id/${courseId}`;
export const getChaptersUrl = (lessonId: string) =>
  `${BASE_URL}/prof/section/cours/id/${lessonId}`;

export const getVocabulary = (chapterId: number) =>
  `${BASE_URL}/admin/sectionItem/sectionId/${chapterId}`;

// Lesson Quiz URLs
export const getLessonQuizUrl = (quizId: number) =>
  `${BASE_URL}/admin/question/quiz/ref/quiz-${quizId}`;
export const getLessonQuizQnResponses = (questionId: number) =>
  `${BASE_URL}/admin/reponse/question/id/${questionId}`;
// Homework URLs
export const getHomeworksUrl = (lessonId: number) =>
  `${BASE_URL}/admin/homeWork/cours/id/${lessonId}`;
export const getHomeworksContentUrl = (homeworkId: number) =>
  `${BASE_URL}/etudiant/homeWorkQST/homework/${homeworkId}`;
export const getHomeworkQuizUrl = (homeworkId: number) =>
  `${BASE_URL}/etudiant/homeWorkQST/homework/${homeworkId}`;
export const getHomeworkQuizResponses = (questionId: number) =>
  `${BASE_URL}/etudiant/homeWorkqstReponse/question/${questionId}`;

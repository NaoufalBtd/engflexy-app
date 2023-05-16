import { lazy } from "react";

export const VOCABULARY = "Vocabulary";
export const STUDY_INFO = "Study the information";
export const PRACTICE = "Let's Practice";
export const WRITE_UP = "Write it up";
export const LISTEN = "Listen";
export const WATCH_IT = "Watch it";
export const READING = "Reading";
export const PHRASEBOOk = "Phrasebook";

export enum LessonChapterCategory {
  vocabulary = "Vocabulary",
  warmUp = "Warm up",
  practice = "Let's Practice",
  getToKnow = "Get to know",
  discussion = "Discussion",
  rolePlay = "Role Play",
  // lifeStory = "Life Story",
  // games = "Games",
}

export const ArticleTemplate = lazy(
  () =>
    import("../components/templates/lessonChaptersTemplates/ArticleTemplate")
);
export const VocabularyTemplate = lazy(
  () =>
    import("../components/templates/lessonChaptersTemplates/VocabularyTemplate")
);
export const LessonPractice = lazy(
  () =>
    import(
      "../components/templates/lessonChaptersTemplates/practice/LessonPractice"
    )
);

export const chaptersComponents = [
  { title: "Warm up", component: ArticleTemplate },
  { title: "Vocabulary", component: VocabularyTemplate },
  // { title: "Home Work Review", component: Box },
  { title: "Get to know", component: ArticleTemplate },
  { title: "Let's practice", component: LessonPractice },
  { title: "Discussion", component: ArticleTemplate },
  // {title: "Life Story", component: ArticleTemplate},
  { title: "Role Play", component: ArticleTemplate },
  // { title: "Games", component: LessonPractice },
];

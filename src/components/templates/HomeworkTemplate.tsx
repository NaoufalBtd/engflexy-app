import _ from "lodash";
import React, { useState } from "react";
import {
  PHRASEBOOk,
  PRACTICE,
  READING,
  STUDY_INFO,
  VOCABULARY,
  WATCH_IT,
  WRITE_UP,
} from "../../constants/Lesson";
import { useAppSelector } from "../../hooks/stateHooks";
import { isLastIndex } from "../../utils";
import SurfaceCenter from "../elements/SurfaceCenter";
import LessonContainerLayout from "../layouts/LessonContainerLayout";
import ErrorBox from "../modules/ErrorBox";
import ArticleTemplate from "./lessonChaptersTemplates/ArticleTemplate";
import VocabularyTemplate from "./lessonChaptersTemplates/VocabularyTemplate";
import HomeworkPractice from "./lessonChaptersTemplates/practice/HomeworkPractice";
import PracticeTemplate from "./lessonChaptersTemplates/practice/PracticeTemplate";

interface HomeworkTemplateProps {}

const homeworkSections = [
  {
    title: VOCABULARY,
    component: VocabularyTemplate,
    catg: "main",
  },
  {
    title: PRACTICE,
    component: HomeworkPractice,
    catg: "main",
  },
  {
    title: STUDY_INFO,
    component: ArticleTemplate,
    catg: "main",
  },
  {
    title: WRITE_UP,
    component: PracticeTemplate, //todo: add component template
    catg: "main",
  },
  {
    title: WATCH_IT,
    component: PracticeTemplate, //todo: add component template
    catg: "additional",
  },
  {
    title: READING,
    component: PracticeTemplate, //todo: add component template
    catg: "additional",
  },
  {
    title: PHRASEBOOk,
    component: PracticeTemplate, //todo: add component template
    catg: "additional",
  },
];

const HomeworkTemplate: React.FC<HomeworkTemplateProps> = () => {
  const { chapters: lessons } = useAppSelector((state) => state.lessons);
  const [homeworkIndex, setHomeworkIndex] = useState(0);

  const Template = homeworkSections[homeworkIndex].component;
  const lessonsData = _.values(lessons?.byId);
  const data = _.find(
    lessonsData,
    (lesson) =>
      lesson.categorySection.label === homeworkSections[homeworkIndex].title
  );

  if (!data)
    return (
      <SurfaceCenter>
        <ErrorBox />
      </SurfaceCenter>
    );

  return (
    <LessonContainerLayout
      previous={
        homeworkIndex > 0
          ? {
              title: homeworkSections[homeworkIndex - 1]?.title,
              action: () => setHomeworkIndex(0),
            }
          : undefined
      }
      next={
        isLastIndex(homeworkSections, homeworkIndex)
          ? {
              title: homeworkSections[homeworkIndex + 1]?.title,
              action: () => setHomeworkIndex(homeworkIndex + 1),
            }
          : undefined
      }>
      {data?.label === PRACTICE ? <Template /> : <Template lesson={data} />}
    </LessonContainerLayout>
  );
};

export default HomeworkTemplate;

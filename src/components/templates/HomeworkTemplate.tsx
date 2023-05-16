import _ from "lodash";
import { Text } from "native-base";
import React, { useEffect } from "react";
import {
  PHRASEBOOk,
  PRACTICE,
  READING,
  STUDY_INFO,
  VOCABULARY,
  WATCH_IT,
  WRITE_UP,
} from "../../constants/Lesson";
import { useAppDispatch, useAppSelector } from "../../hooks/stateHooks";
import {
  nextHomework,
  previousHomework,
} from "../../store/reducers/homeworkReducer";
import { fetchHomeworks } from "../../store/thunks/homeworkThunk";
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
    title: PRACTICE,
    component: HomeworkPractice,
    catg: "main",
  },
  {
    title: VOCABULARY,
    component: VocabularyTemplate,
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
  const { lessonId } = useAppSelector((state) => state.lessons);
  const { homeworkIndex, homeworks, isLoading } = useAppSelector(
    (state) => state.homework
  );
  const dispatch = useAppDispatch();

  const Template = homeworkSections[homeworkIndex].component;
  const lessonsData = _.values(lessons?.byId);
  const data = _.find(
    lessonsData,
    (lesson) =>
      lesson.categorySection.label === homeworkSections[homeworkIndex].title
  );

  useEffect(() => {
    console.log("mounted");
    lessonId && dispatch(fetchHomeworks(lessonId));
  }, [lessonId]);

  if (isLoading) return <Text>Loading...</Text>;
  if (!data || !homeworks)
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
              action: () => dispatch(nextHomework()),
            }
          : undefined
      }
      next={
        !isLastIndex(_.values(homeworks.byId), homeworkIndex)
          ? {
              title: homeworkSections[homeworkIndex + 1]?.title,
              action: () => dispatch(previousHomework()),
            }
          : undefined
      }>
      {data?.label === PRACTICE ? <Template /> : <Template chapter={data} />}
    </LessonContainerLayout>
  );
};

export default HomeworkTemplate;

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
import { getHomeWorkComponent } from "../../helpers";
import { useAppDispatch, useAppSelector } from "../../hooks/stateHooks";
import {
  nextHomework,
  previousHomework,
  selectNextHomeworkTitle,
} from "../../store/reducers/homeworkReducer";
import { fetchHomeworks } from "../../store/thunks/homeworkThunk";
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
  const { lessonId } = useAppSelector((state) => state.lessons);
  const { homeworks, isLoading, error, currHomework, homeworksTypes } =
    useAppSelector((state) => state.homework);
  const nextHomeworkTitle = useAppSelector(selectNextHomeworkTitle);
  const prevHomeworkTitle = useAppSelector(selectNextHomeworkTitle);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("mounted");
    lessonId && dispatch(fetchHomeworks(lessonId));
  }, [lessonId]);

  if (isLoading) return <Text>Loading...</Text>;
  if (error || !currHomework || !homeworks || !homeworksTypes)
    return (
      <SurfaceCenter>
        <ErrorBox />
      </SurfaceCenter>
    );

  const HwComponent = getHomeWorkComponent(
    homeworksTypes.byId[currHomework.homeworkTypeId]?.label
  );

  return (
    <LessonContainerLayout
      previous={
        prevHomeworkTitle
          ? {
              title: prevHomeworkTitle,
              action: () => dispatch(previousHomework()),
            }
          : undefined
      }
      next={
        nextHomeworkTitle
          ? {
              title: nextHomeworkTitle,
              action: () => dispatch(nextHomework()),
            }
          : undefined
      }>
      {HwComponent && <HwComponent homeworkId={currHomework.id} />}
    </LessonContainerLayout>
  );
};

export default HomeworkTemplate;

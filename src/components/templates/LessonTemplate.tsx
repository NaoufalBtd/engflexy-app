import _ from "lodash";
import { Text } from "native-base";
import React from "react";
import { useAppSelector } from "../../hooks/stateHooks";
import LessonLayout from "../layouts/LessonLayout";
import LessonSectionLayout from "../layouts/LessonSectionLayout";
import ArticleTemplate from "./LessonTemplates/ArticleTemplate";
import PracticeTemplate from "./LessonTemplates/PracticeTemplate";
import VocabularyTemplate from "./LessonTemplates/VocabularyTemplate";

interface LessonTemplateProps {}

const LESSONS_SECTIONS_CODE = [
  { title: "Warm up", component: ArticleTemplate },
  { title: "vocabulary", component: VocabularyTemplate },
  { title: "Get to know", component: ArticleTemplate },
  { title: "Let's practice", component: PracticeTemplate },
  { title: "Discussion", component: ArticleTemplate },
];
const LessonTemplate: React.FC<LessonTemplateProps> = () => {
  const { lessons, lessonIndex } = useAppSelector((state) => state.lessons);
  const Template = LESSONS_SECTIONS_CODE[lessonIndex].component;
  const lessonData = _.find(
    _.values(lessons.byId),
    (lesson) =>
      lesson.categorySection.label === LESSONS_SECTIONS_CODE[lessonIndex].title
  );

  return (
    <LessonLayout
      bg={"background.surface"}
      h={"full"}
      lessonTemplate={() => (
        <LessonSectionLayout>
          <Template lesson={lessonData} />
        </LessonSectionLayout>
      )}
      homeWorkTemplate={() => <Text>Home Work</Text>}
      dictionaryTemplate={() => <Text>Dictionary</Text>}
      chatTemplate={() => <Text>Chat</Text>}
    />
  );
};

export default LessonTemplate;

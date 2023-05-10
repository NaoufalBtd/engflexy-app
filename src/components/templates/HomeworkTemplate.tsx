import _ from 'lodash';
import React from 'react';
import { useAppSelector } from '../../hooks/stateHooks';
import LessonLayout from '../layouts/LessonLayout';
import ArticleTemplate from './lessonChaptersTemplates/ArticleTemplate';
import PracticeTemplate from './lessonChaptersTemplates/PracticeTemplate';
import VocabularyTemplate from './lessonChaptersTemplates/VocabularyTemplate';

interface HomeworkTemplateProps {

}

const homeworkSections = [{
  title: 'Vocabulary',
  component: VocabularyTemplate,
  catg: 'main'
},
{
  title: "Study the information",
  component: ArticleTemplate,
  catg: 'main'
},
{
  title: "Let's Practice",
  component: PracticeTemplate,
  catg: 'main'
},
{
  title: "Write it Up",
  component: PracticeTemplate, //todo: add component template
  catg: 'main'
}, {
  title: "Watch it",
  component: PracticeTemplate, //todo: add component template
  catg: 'additional'

},
{
  title: 'Reading',
  component: PracticeTemplate, //todo: add component template
  catg: 'additional'
}
{
  title: 'Phrasebook',
  component: PracticeTemplate, //todo: add component template
  catg: 'additional'
}

]

const HomeworkTemplate: React.FC<HomeworkTemplateProps> = () => {
  const { chapters: lessons, homeworkIndex } = useAppSelector((state) => state.lessons);
  const Template = homeworkSections[homeworkIndex].component;
  const lessonsData = _.values(lessons.byId);
  const lesson = _.find(lessonsData, (lesson) => lesson.categorySection.label === homeworkSections[homeworkIndex].title);
  return (
    <LessonLayout>
      <Template lesson={lesson} />
    </LessonLayout>
  );
};

export default HomeworkTemplate;
import { Text } from "native-base";
import React from "react";
import {
  CHOOSE_CORRECT_FORM,
  CORRECT_MISTAkE,
  WRITE_CORRECT_FORM,
} from "../../../constants/questionTypes";
import { useAppSelector } from "../../../hooks/stateHooks";
import QuizLayout from "../../layouts/QuizLayout";
import QcmTemplate from "../quizTemplates/QcmTemplate";

interface PracticeTemplateProps {}

const quizComp = [
  {
    questionType: CHOOSE_CORRECT_FORM,
    component: QcmTemplate,
  },
  {
    questionType: WRITE_CORRECT_FORM,
    component: Text,
  },
  {
    questionType: CORRECT_MISTAkE,
    component: Text,
  },
];

const PracticeTemplate: React.FC<PracticeTemplateProps> = () => {
  const { quiz, currQuestion, currQuestionType } = useAppSelector(
    (state) => state.quiz
  );

  const currQuestionTypeId = currQuestion?.quizTypeId;

  const QuizComponent = quizComp.find(
    (quiz) => quiz.questionType === currQuestionType?.lib
  )?.component;

  return (
    <QuizLayout qnNumbers={1} currQnNumber={1}>
      <QuizComponent />
    </QuizLayout>
  );
};

export default PracticeTemplate;

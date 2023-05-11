import { SplashScreen } from "expo-router";
import React, { useEffect } from "react";
import {
  CHOOSE_CORRECT_FORM,
  CORRECT_MISTAkE,
  WRITE_CORRECT_FORM,
} from "../../../../constants/Quiz";
import { useAppDispatch, useAppSelector } from "../../../../hooks/stateHooks";
import { fetchQuiz } from "../../../../store/thunks/fetchQuiz";
import QuizLayout from "../../../layouts/QuizLayout";
import QcmTemplate from "../../quizTemplates/QcmTemplate";

const quizComp = [
  {
    questionType: CHOOSE_CORRECT_FORM,
    component: QcmTemplate,
  },
  {
    questionType: WRITE_CORRECT_FORM,
    component: QcmTemplate,
  },
  {
    questionType: CORRECT_MISTAkE,
    component: QcmTemplate,
  },
];

interface PracticeTemplateProps {
  type: "practice" | "homework";
}

const PracticeTemplate: React.FC<PracticeTemplateProps> = ({ type }) => {
  const {
    currQuestion,
    currQuestionType,
    isLoading,
    responses,
    currQuestionStatus,
  } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuiz(type));
  }, []);

  const QuizComponent = quizComp.find(
    (quiz) => quiz.questionType === currQuestionType?.label
  )?.component;

  return (
    <QuizLayout
      qnNumbers={1}
      currQnNumber={1}
      questionStatus={currQuestionStatus}>
      {isLoading && <SplashScreen />}
      {QuizComponent && !isLoading && (
        <QuizComponent question={currQuestion} answers={responses} />
      )}
    </QuizLayout>
  );
};

export default PracticeTemplate;

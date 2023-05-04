import { SplashScreen } from "expo-router";
import React, { useEffect } from "react";
import {
  CHOOSE_CORRECT_FORM,
  CORRECT_MISTAkE,
  WRITE_CORRECT_FORM,
} from "../../../constants/Quiz";
import { useAppDispatch, useAppSelector } from "../../../hooks/stateHooks";
import { fetchQuiz } from "../../../store/thunks/fetchQuiz";
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
    component: QcmTemplate,
  },
  {
    questionType: CORRECT_MISTAkE,
    component: QcmTemplate,
  },
];

const PracticeTemplate: React.FC<PracticeTemplateProps> = () => {
  const {
    currQuestion,
    currQuestionType,
    loaded,
    responses: answers,
    currQuestionStatus,
  } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();

  // console.log("---------- currQuestionType ----------", currQuestionType);
  // console.log("---------- currQuestion ----------", currQuestion);
  // console.log("---------- loaded ----------", loaded);
  console.log("---------- currQuestionStatus ----------", currQuestionStatus);

  useEffect(() => {
    dispatch(fetchQuiz());
  }, []);

  const QuizComponent = quizComp.find(
    (quiz) => quiz.questionType === currQuestionType?.label
  )?.component;

  return (
    <QuizLayout
      qnNumbers={1}
      currQnNumber={1}
      questionStatus={currQuestionStatus}>
      {loaded && <SplashScreen />}
      {QuizComponent && !loaded && (
        <QuizComponent question={currQuestion} answers={answers} />
      )}
    </QuizLayout>
  );
};

export default PracticeTemplate;

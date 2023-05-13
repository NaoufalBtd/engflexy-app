import React, { useEffect } from "react";
import {
  CHOOSE_CORRECT_FORM,
  CORRECT_MISTAkE,
  QuestionStatus,
  WRITE_CORRECT_FORM,
} from "../../../../constants/Quiz";
import { useAppDispatch } from "../../../../hooks/stateHooks";
import { fetchQuiz } from "../../../../store/thunks/fetchQuiz";
import { QnResponses } from "../../../../types/models/QnResponseModel";
import { Question, QuestionType } from "../../../../types/models/QuestionModel";
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
  question: Question;
  responses: QnResponses;
  questionType: QuestionType;
  questionStatus: QuestionStatus;
}

const PracticeTemplate: React.FC<PracticeTemplateProps> = ({
  type,
  question,
  questionType,
  responses,
  questionStatus,
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuiz(type));
  }, []);

  const QuizComponent = quizComp.find(
    (quiz) => quiz.questionType === questionType.label
  )?.component;

  return (
    <QuizLayout qnNumbers={1} currQnNumber={1} questionStatus={questionStatus}>
      {QuizComponent && (
        <QuizComponent question={question} responses={responses} />
      )}
    </QuizLayout>
  );
};

export default PracticeTemplate;

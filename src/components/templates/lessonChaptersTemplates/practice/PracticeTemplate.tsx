import React from "react";
import { QnsTypes, QuestionStatus } from "../../../../constants/Quiz";
import { getQuizQnComponent } from "../../../../helpers";
import { QnResponse } from "../../../../types/models/QnResponseModel";
import {
  Question,
  QuestionType,
  Questions,
} from "../../../../types/models/QuestionModel";
import QuizLayout from "../../../layouts/QuizLayout";
import FillBlankTemplate from "../../quizTemplates/FillBlankTemplate";
import QcmTemplate from "../../quizTemplates/QcmTemplate";

const quizComp = [
  {
    questionType: QnsTypes.qcm,
    component: QcmTemplate,
  },
  {
    questionType: QnsTypes.writeCorrectForm,
    component: FillBlankTemplate,
  },
  {
    questionType: QnsTypes.correctMistake,
    component: FillBlankTemplate,
  },
];

interface PracticeTemplateProps {
  type: "practice" | "homework";
  question: Question;
  questions: Questions;
  responses: QnResponse[];
  questionType: QuestionType;
  questionStatus: QuestionStatus;
  answerSubmitted: boolean;
  onAnswerSubmit: () => void;
  onPressNext: () => void;
}

const PracticeTemplate: React.FC<PracticeTemplateProps> = ({
  question,
  questions,
  questionType,
  responses,
  questionStatus,
  answerSubmitted,
  onAnswerSubmit,
  onPressNext,
}) => {
  const QuizComponent = getQuizQnComponent(questionType.ref);
  const currQnNumber = questions.allIds.indexOf(question.id) + 1;

  return (
    <QuizLayout
      qnNumbers={questions.allIds.length}
      currQnNumber={currQnNumber}
      questionStatus={questionStatus}
      answerSubmitted={answerSubmitted}
      onAnswerSubmit={onAnswerSubmit}
      onPressNext={onPressNext}>
      {QuizComponent && (
        <QuizComponent
          question={question}
          responses={responses}
          questionStatus={questionStatus}
          answerSubmitted={answerSubmitted}
        />
      )}
    </QuizLayout>
  );
};

export default PracticeTemplate;

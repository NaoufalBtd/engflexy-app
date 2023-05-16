import React from "react";
import svgTest from "../../../../assets/svg/undraw_right_places.svg";
import { QuestionStatus } from "../../../constants/Quiz";
import { QnResponse } from "../../../types/models/QnResponseModel";
import { Question } from "../../../types/models/QuestionModel";
import QcmQuiz from "../../modules/quizes/QcmQuiz";
import QuizBaseTemplate from "./QuizBaseTemplate";

interface QcmQuizTemplateProps {
  question: Question;
  responses: QnResponse[];
  questionStatus: QuestionStatus;
  answerSubmitted: boolean;
}

const QcmTemplate: React.FC<QcmQuizTemplateProps> = ({
  question,
  responses,
  questionStatus,
  answerSubmitted,
}) => {
  return (
    <QuizBaseTemplate svg={svgTest} title="Choose The Correct Alternative a">
      <QcmQuiz
        question={question}
        responses={responses}
        questionStatus={questionStatus}
        answerSubmitted={answerSubmitted}
      />
    </QuizBaseTemplate>
  );
};

export default QcmTemplate;

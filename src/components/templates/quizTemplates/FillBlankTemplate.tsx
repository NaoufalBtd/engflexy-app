import React from "react";
import svgTest from "../../../../assets/svg/undraw_right_places.svg";
import { QnTemplateProp } from "../../../types/components/QnTemplateProp";
import FillBlankQuiz from "../../modules/quizes/FillBlankQuiz";
import QuizBaseTemplate from "./QuizBaseTemplate";

const FillBlankTemplate: React.FC<QnTemplateProp> = ({
  question,
  responses,
  questionStatus,
  answerSubmitted,
}) => {
  return (
    <QuizBaseTemplate svg={svgTest} title="Write The Correct Alternative">
      <FillBlankQuiz
        question={question}
        responses={responses}
        questionStatus={questionStatus}
        answerSubmitted={answerSubmitted}
      />
    </QuizBaseTemplate>
  );
};

export default FillBlankTemplate;

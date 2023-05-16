import { Text } from "native-base";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/stateHooks";
import {
  nextHomework,
  submitAnswer,
} from "../../../../store/reducers/homeworkReducer";
import { Question } from "../../../../types/models/QuestionModel";
import { getElementFromNormalizedData } from "../../../../utils";
import SurfaceCenter from "../../../elements/SurfaceCenter";
import ErrorBox from "../../../modules/ErrorBox";
import PracticeTemplate from "./PracticeTemplate";

const HomeworkPractice: React.FC = () => {
  const {
    homeworkQuestions,
    homeworkIndex,
    isLoading,
    error,
    currQuestionStatus,
    questionsTypes,
    homeworkResponses,
    answerSubmitted,
  } = useAppSelector((state) => state.homework);
  const dispatch = useAppDispatch();

  if (isLoading) return <Text>Loading...</Text>;
  if (error || !homeworkQuestions || !questionsTypes || !homeworkResponses)
    return (
      <SurfaceCenter>
        <ErrorBox />
      </SurfaceCenter>
    );

  const currQuestion = getElementFromNormalizedData<Question>(
    homeworkQuestions,
    homeworkIndex
  );
  console.log("currQuestion", currQuestion);
  const currQnType = questionsTypes.byId[currQuestion?.questionTypeId];

  const handleAnswerSubmit = () => {
    dispatch(submitAnswer());
  };
  const handleNextQuestion = () => {
    dispatch(nextHomework());
  };

  return (
    <PracticeTemplate
      question={currQuestion}
      questionStatus={currQuestionStatus}
      questionType={currQnType}
      responses={homeworkResponses}
      type="homework"
      onAnswerSubmit={handleAnswerSubmit}
      onPressNext={handleNextQuestion}
      answerSubmitted={answerSubmitted}
    />
  );
};

export default HomeworkPractice;

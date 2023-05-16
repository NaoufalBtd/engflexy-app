import _ from "lodash";
import { Text } from "native-base";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/stateHooks";
import {
  nextQuestion,
  submitAnswer,
} from "../../../../store/reducers/lessonQuizReducer";
import { fetchQuiz } from "../../../../store/thunks/fetchQuiz";
import SurfaceCenter from "../../../elements/SurfaceCenter";
import ErrorBox from "../../../modules/ErrorBox";
import PracticeTemplate from "./PracticeTemplate";

const LessonPractice: React.FC = () => {
  const {
    questions,
    currQuestion,
    responses,
    questionsTypes,
    currQuestionStatus,
    isLoading,
    error,
    answerSubmitted,
  } = useAppSelector((state) => state.lessonQuiz);
  const { chapter } = useAppSelector((state) => state.lessons);
  const dispatch = useAppDispatch();

  useEffect(() => {
    chapter && dispatch(fetchQuiz(chapter?.id));
  }, [chapter]);

  if (isLoading) return <Text>Loading...</Text>;

  if (error || !currQuestion || !responses || !questionsTypes || !questions) {
    return (
      <SurfaceCenter>
        <ErrorBox />
      </SurfaceCenter>
    );
  }

  const currQnType = questionsTypes.byId[currQuestion.questionTypeId];
  const qnResponses = _.filter(
    _.values(responses.byId),
    (res) => res.questionId === currQuestion.id
  );

  const handleAnswerSubmit = () => {
    dispatch(submitAnswer());
  };
  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };
  return (
    <PracticeTemplate
      type="practice"
      questions={questions}
      onAnswerSubmit={handleAnswerSubmit}
      onPressNext={handleNextQuestion}
      question={currQuestion}
      questionType={currQnType}
      questionStatus={currQuestionStatus}
      responses={qnResponses}
      answerSubmitted={answerSubmitted}
    />
  );
};

export default LessonPractice;

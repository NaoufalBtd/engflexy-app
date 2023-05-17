import _ from "lodash";
import { Text } from "native-base";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/stateHooks";
import {
  nextHwQuestion,
  submitHwAnswer,
} from "../../../../store/reducers/homeworkQuizReducer";
import { fetchHomeworkQnsAndResponses } from "../../../../store/thunks/homeworkThunk";
import SurfaceCenter from "../../../elements/SurfaceCenter";
import ErrorBox from "../../../modules/ErrorBox";
import PracticeTemplate from "./PracticeTemplate";

interface HomeworkPracticeProps {
  homeworkId: number;
}

const HomeworkPractice: React.FC<HomeworkPracticeProps> = ({ homeworkId }) => {
  const {
    homeworkQuizQuestions,
    currQuestion,
    isLoading,
    error,
    currQuestionStatus,
    questionsTypes,
    homeworkQuizResponses,
    answerSubmitted,
  } = useAppSelector((state) => state.homeworkQuiz);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHomeworkQnsAndResponses(homeworkId));
  }, [homeworkId]);

  if (isLoading) return <Text>Loading...</Text>;
  if (
    error ||
    !homeworkQuizQuestions ||
    !questionsTypes ||
    !homeworkQuizResponses ||
    !currQuestion
  )
    return (
      <SurfaceCenter>
        <ErrorBox />
      </SurfaceCenter>
    );

  const currQnType = questionsTypes.byId[currQuestion?.questionTypeId];
  const qnResponses = _.filter(
    _.values(homeworkQuizResponses.byId),
    (res) => res.questionId === currQuestion.id
  );

  const handleAnswerSubmit = () => {
    dispatch(submitHwAnswer());
  };
  const handleNextQuestion = () => {
    dispatch(nextHwQuestion());
  };

  return (
    <PracticeTemplate
      questions={homeworkQuizQuestions}
      question={currQuestion}
      questionStatus={currQuestionStatus}
      questionType={currQnType}
      responses={qnResponses}
      type="homework"
      onAnswerSubmit={handleAnswerSubmit}
      onPressNext={handleNextQuestion}
      answerSubmitted={answerSubmitted}
    />
  );
};

export default HomeworkPractice;

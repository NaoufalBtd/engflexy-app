import { Text } from "native-base";
import React from "react";
import { useAppSelector } from "../../../../hooks/stateHooks";
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
  } = useAppSelector((state) => state.homework);

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
  const currQnType = questionsTypes.byId[currQuestion?.questionTypeId];
  return (
    <PracticeTemplate
      question={currQuestion}
      questionStatus={currQuestionStatus}
      questionType={currQnType}
      responses={homeworkResponses}
      type="homework"
    />
  );
};

export default HomeworkPractice;

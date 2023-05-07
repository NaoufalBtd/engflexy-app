import { QuestionStatus } from "../constants/Quiz";

export const alpha = (color: string, opacity: number) => {
  const alphaValue = Math.round(opacity * 255);
  const colorValue = color.startsWith("#") ? color.slice(1) : color;
  const hexValue = `${colorValue}${alphaValue.toString(16).padStart(2, "0")}`;
  return `rgba(${parseInt(colorValue.substring(0, 2), 16)}, ${parseInt(
    colorValue.substring(2, 4),
    16
  )}, ${parseInt(colorValue.substring(4, 6), 16)}, ${opacity})`;
};

export const quizAnswerFeedbackColor = (
  currQuestionStatus: QuestionStatus
): string => {
  switch (currQuestionStatus) {
    case QuestionStatus.NeedsAssistance:
      return "yellow";
    case QuestionStatus.AnsweredCorrectly:
      return "green";
    case QuestionStatus.AnsweredIncorrectly:
      return "red";
    case QuestionStatus.NotAnswered:
      return "white";
    default:
      return "gray";
  }
};

//todo: complete this function - we stop in enteredAnswers and i still struggling to define the name
export const getQcmCheckboxColor = (
  answerId: number,
  correctAnswersIds: number[],
  selectedAnswersIds: string[]
) => {
  if (correctAnswersIds.includes(answerId)) {
    return "success.400";
  } else if (selectedAnswersIds.includes(answerId.toString())) {
    return "error.400";
  } else {
    return "background.surface";
  }
};

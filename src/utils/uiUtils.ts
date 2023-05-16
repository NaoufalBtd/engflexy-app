import IntermediateSvg from "../../assets/svg/book_lover.svg";
import AdvancedSvg from "../../assets/svg/books.svg";
import PreIntermediateSvg from "../../assets/svg/education.svg";
import ElementarySvg from "../../assets/svg/reading_book.svg";
import UpperIntermediateSvg from "../../assets/svg/sharing_knowledge.svg";
import { Parcours } from "../constants/Parours";
import { QuestionStatus } from "../constants/Quiz";
import { ITheme } from "../theme";
import { QnResponse } from "../types/models/QnResponseModel";

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
  currQuestionStatus: QuestionStatus,
  answerSubmitted: boolean,
  colors: ITheme["colors"]
): string => {
  if (!answerSubmitted) {
    return colors.white;
  }
  switch (currQuestionStatus) {
    // case QuestionStatus.NeedsAssistance:
    //   return "yellow";
    case QuestionStatus.AnsweredCorrectly:
      return colors.success[400];
    case QuestionStatus.AnsweredIncorrectly:
      return colors.error[400];
    case QuestionStatus.NotAnswered:
      return colors.info[400];
    default:
      console.error("quizAnswerFeedbackColor Function: Invalid status handler");
      return colors.white;
  }
};

export const getQcmCheckboxColor = (
  answerIds: number[],
  response: QnResponse,
  colors: ITheme["colors"]
) => {
  if (response.isCorrect) {
    return colors.success[400];
  } else if (!response.isCorrect && answerIds.includes(response.id)) {
    return colors.error[400];
  } else {
    return colors.background.level2;
  }
};

export const getSvgIconByParcours = (parcours: string) => {
  let svgIcon = "";
  switch (parcours) {
    case Parcours.ELEMENTARY:
      return ElementarySvg;
      break;
    case Parcours.PRE_INTERMEDIATE:
      svgIcon = PreIntermediateSvg;
      break;
    case Parcours.INTERMEDIATE:
      svgIcon = IntermediateSvg;
      break;
    case Parcours.UPPER_INTERMEDIATE:
      svgIcon = UpperIntermediateSvg;
      break;
    case Parcours.ADVANCED:
      svgIcon = AdvancedSvg;
      break;
    case Parcours.BAC:
      svgIcon = IntermediateSvg;
      break;
    default:
      svgIcon = IntermediateSvg;
  }

  return svgIcon;
};

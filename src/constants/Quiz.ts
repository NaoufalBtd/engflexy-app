export const CHOOSE_CORRECT_FORM = "Choose the correct alternative";

export const WRITE_CORRECT_FORM = "Write the correct form";

export const CORRECT_MISTAkE = "Correct the mistake";

export enum QuestionStatus {
  NotAnswered = 0,
  InProgress = 1,
  AnsweredCorrectly = 2,
  AnsweredIncorrectly = 3,
  NeedsAssistance = 4,
}

export enum QnsTypes {
  qcm = "Choose the correct alternative",
  fillBlank = "Write the correct form",
  correctMistake = "Correct the mistake",
  dragAndDrop = "Drag and drop",
}

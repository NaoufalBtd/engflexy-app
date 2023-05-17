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
  qcm = "t1",
  writeCorrectForm = "t6",
  correctMistake = "t4",
  putInOrder = "t11",
}

export enum QnCategory {
  homework = "homework",
  practice = "practice",
}

// after clicking on lesson and event(evt) is passsed to function call openSession ->

// eslint-disable-next-line no-unused-vars
const evt = {
  id: 31051,
  description: null,
  image: null,
  libelle: "Intro lesson",
  code: null,
  etatCours: null,
  parcours: {
    id: 31050,
    datePublication: null,
    dateCreation: null,
    description: null,
    libelle: "5 ADVANCED",
    code: "5 ADVANCED",
    numeroOrder: 0,
    nombreCours: 51,
    centre: {
      id: 83,
      libelle: "American Center 1",
      description: null,
      log: null,
      password: null,
      ref: "a1",
    },
  },
  nombreSectionFinalise: 4,
  nombreSectionEnCours: 2,
  nombreLinkEnCours: 2,
  nombreLinkFinalise: 4,
  numeroOrder: 0,
};

//? what is the responsibility of simulateSectionService
//todo: do a breakpoint to simulateSectionService

//In backend section is cours in frontend and it's what i call it lesson in my code

/**
 * homeWorkUrl: homeWork/cours/id/
 * homeWorkFunciton: findHomeWorkByCoursId
 *
 * quizUrl: question/quiz
 * quizFunction: findAllQuestions/findQuizByReference
 * the ref of the quiz is the id of seqtion let's practise - each section of the lesson has a quiz
 *
 *
 * */

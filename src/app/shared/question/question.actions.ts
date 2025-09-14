import { createAction, props } from "@ngrx/store";
import { QuestionAdapt } from "../interFace/question";

export const loadQuestions =createAction('[Question] load Questions',props<{ExamId:string}>())



export const setQuestions = createAction(
  '[Question] set Questions',
  props<{ questions: QuestionAdapt[] }>()
);


export const setCurrentQuestions = createAction(
  '[Question] set Current Questions',
  props<{ question: QuestionAdapt }>()
);
export const updateQuestions = createAction(
  '[Question] Update Questions',
  props<{ qid:string,selectedAnswer:string }>()
);

export const onNext = createAction('[Question] On Next',);
export const onBack = createAction('[Question] On Back',);
export const filterWrongAnswers = createAction('[Question] Filter Wrong Answers',);
export const ResetQuestionsState = createAction('[Question] Reset Question State',);
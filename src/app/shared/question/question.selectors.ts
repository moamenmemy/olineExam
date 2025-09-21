import { createFeatureSelector, createSelector } from "@ngrx/store"
import { questionsStatas } from "./question.state"

export const selectQuestinlStateFeature =createFeatureSelector<questionsStatas>('question')
// Selector للـ questions array

export const selectQuestions = createSelector(
selectQuestinlStateFeature  ,
  (state) => state.questions
);
export const selectNumberOfQuestions = createSelector(
selectQuestinlStateFeature  ,
  (state) => state.questions.length
);
export const selectNumberOfWronQuestions = createSelector(
selectQuestinlStateFeature  ,
  (state) => state.wrongQuestions.length
);
export const selectWrongQuestions=createSelector(
  selectQuestinlStateFeature ,
  (state)=>state.wrongQuestions
)

export const selectcurrentQuestion =createSelector(
   selectQuestinlStateFeature,
   (state)=>state.currentQuestion)
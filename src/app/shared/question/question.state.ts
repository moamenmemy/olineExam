import { QuestionAdapt } from "../interFace/question"

export interface questionsStatas{
    questions:QuestionAdapt[]
    wrongQuestions:QuestionAdapt[]
    currentQuestion: QuestionAdapt | null; 



}


export const initialQuestionsState : questionsStatas ={
    questions: [] as QuestionAdapt[],
    currentQuestion: null,
    wrongQuestions: [] as QuestionAdapt[],
}
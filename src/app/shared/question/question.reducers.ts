import { createReducer, on } from "@ngrx/store";
import { initialQuestionsState } from "./question.state";
import * as QuestinActions from './question.actions'

export const questionReducer =createReducer(
    initialQuestionsState,
    on(QuestinActions.setQuestions,(state,{questions})=>({
        ...state,
        questions:questions,
       
    })),


    on(QuestinActions.setCurrentQuestions,(state,{question})=>({
        ...state,
        currentQuestion:question

    }) ),
    on(QuestinActions.updateQuestions,(state,{qid,selectedAnswer})=>({
        ...state,
        questions:state.questions.map((q)=>q._id=== qid?  {...q,selectedAnswer} :q )
            
        

    })),
    on(QuestinActions.onNext,(state) =>({
        ...state,
        currentQuestion:state.questions[(state.currentQuestion?.index ?? 0)  +1]
    })),
    on(QuestinActions.onBack,(state) =>({
        ...state,
        currentQuestion:state.questions[(state.currentQuestion?.index ?? 0)  -1]
    })),
    on(QuestinActions.filterWrongAnswers,(state) =>({
        ...state,
     wrongQuestions:state.questions.filter(
        (q)=> q.selectedAnswer!== q.correct
     )
    })),
    on(QuestinActions.ResetQuestionsState,()=>initialQuestionsState)



)
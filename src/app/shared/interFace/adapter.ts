import { QuestionAdapt, QuestionsResponse } from "./question";


export interface Adapter {

questionAdapter(data: QuestionsResponse): QuestionAdapt[]
}

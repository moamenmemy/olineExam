import { Injectable } from '@angular/core';
import { Adapter } from '../../shared/interFace/adapter';
import { QuestionsResponse, QuestionAdapt } from '../../shared/interFace/question';

@Injectable({
  providedIn: 'root'
})
export class MainAPIAdaperService implements Adapter {
  questionAdapter(data: QuestionsResponse): QuestionAdapt[] {
    return data.questions.map((q, index) => ({
      answers: q.answers,
      _id: q._id,
      index: index,
      question: q.question,
      correct: q.correct,
      selectedAnswer: undefined
    }));
  }
}

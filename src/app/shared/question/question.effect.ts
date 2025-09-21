import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as QuestionActions from '../../shared/question/question.actions';
import { switchMap, tap, map } from 'rxjs/operators';
import { QuestionsService } from '../../core/srvices/questions.service';

@Injectable()
export class QuestionEffects {
  private actions$ = inject(Actions);
  private readonly _questionsService = inject(QuestionsService);

  loadQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuestionActions.loadQuestions),
      switchMap(action =>
        this._questionsService.getQuestionById(action.ExamId).pipe(
          tap(data => console.log('QuestionsData from API:', data)),
          map(data => QuestionActions.setQuestions({ questions: data }))
        )
      )
    )
  );




  setQuestionsEffect$= createEffect(()=>

    this.actions$.pipe(
      ofType(QuestionActions.setQuestions),
      map((action)=>QuestionActions.setCurrentQuestions({question:action.questions[0]}))
    )
  );
}

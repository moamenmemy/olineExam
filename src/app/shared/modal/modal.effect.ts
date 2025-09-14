import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as QuestionActions from '../../shared/question/question.actions'
import { map, tap } from 'rxjs/operators';
import * as QuestionSelectors from '../../shared/question/question.selectors';
import * as ModalActions from '../../shared/modal/modal.actions';
import { from } from 'rxjs';


@Injectable()
export class ModalEffects {
  private actions$ = inject(Actions);

  startModalEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ModalActions.openModal),
  tap((action) => console.log('Modal Opened:', action)),       
      map((action: ReturnType<typeof ModalActions.openModal>) =>
        QuestionActions.loadQuestions({ ExamId: action.examId })
      )
    )
  );

  //  setExamStatusEffect$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ModalActions.setExamlStatus),
  // tap((action) => console.log('New Exam Status:', action)),       
     
  //   )
  // );
}
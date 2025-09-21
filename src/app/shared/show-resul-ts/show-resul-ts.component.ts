import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as QuestionSelectors from '../question/question.selectors'
import { QuestionAdapt,  } from '../interFace/question';
import {  Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-show-resul-ts',
  imports: [AsyncPipe],
  templateUrl: './show-resul-ts.component.html',
  styleUrl: './show-resul-ts.component.scss'
})
export class ShowResulTsComponent {
   private readonly _store =inject(Store)

  wrongQuestions$: Observable< QuestionAdapt[]> = this._store.select(QuestionSelectors.selectWrongQuestions);


}

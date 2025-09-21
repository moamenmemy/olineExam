import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import { baseUrl } from '../../../../projects/auth/src/lib/baseUrl/baseUrl';

import { Endpoints } from '../../../../projects/auth/src/lib/baseUrl/endPointe';
import { QuestionAdapt, QuestionsResponse } from '../../shared/interFace/question';
import { MainAPIAdaperService } from '../adapter/main-apiadaper';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
private readonly _http =inject(HttpClient)
private readonly _mainAPIAdaperService =inject(MainAPIAdaperService)
getQuestionById(examId: string): Observable<QuestionAdapt[]> {
  return this._http
    .get<QuestionsResponse>(`${baseUrl.baseUrl}` + Endpoints.QuestionsByExam + examId)
    .pipe(
      map((res: QuestionsResponse) => this._mainAPIAdaperService.questionAdapter(res))
    );
}
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exams } from '../../shared/interFace/allExams/exams';
import { baseUrl } from '../../../../projects/auth/src/lib/baseUrl/baseUrl';
import { BASe_Toke } from '../../shared/token/app.token';

@Injectable({
  providedIn: 'root'
})
export class AlllExamsService {

  constructor(private http:HttpClient) { }
 private readonly _bASe_Toke=inject(BASe_Toke)
allExams():Observable<Exams>{
  return this.http.get<Exams>(`${baseUrl.baseUrl}/exams`)
}

}

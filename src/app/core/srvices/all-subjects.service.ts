import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subjects } from '../../shared/interFace/subjects/subjects';
import { baseUrl } from '../../../../projects/auth/src/lib/baseUrl/baseUrl';
import { BASe_Toke } from '../../shared/token/app.token';

@Injectable({
  providedIn: 'root'
})
export class AllSubjectsService {

 constructor(private http:HttpClient) { }

  private readonly _baseUrl = inject(BASe_Toke);

 allSubjects():Observable<Subjects>{
  return this.http.get<Subjects>(`${this._baseUrl}/subjects`)
 }
}

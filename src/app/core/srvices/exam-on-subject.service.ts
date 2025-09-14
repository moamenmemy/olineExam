import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../../../projects/auth/src/lib/baseUrl/baseUrl';
import { BASe_Toke } from '../../shared/token/app.token';
import { Subject, Subjects } from '../../shared/interFace/subjects/subjects';

@Injectable({
  providedIn: 'root'
})
export class ExamOnSubjectService {

  constructor(private http:HttpClient) { }
 
  examOnSubject(subjectId:string):Observable<Subjects>{
const params =new HttpParams().set('subject',subjectId)
  

    return this.http.get<Subjects>(`${baseUrl.baseUrl}/exams`,{params})
  }

  
}

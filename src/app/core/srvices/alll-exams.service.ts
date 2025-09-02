import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlllExamsService {

  constructor(private http:HttpClient) { }

allExams():Observable<any>{
  return this.http.get(`https://exam.elevateegy.com/api/v1/exams`,
    {
      headers:{token:localStorage.getItem('userData')||''}
    }
  )
}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllSubjectsService {

 constructor(private http:HttpClient) { }


 allSubjects():Observable<any>{
  return this.http.get(`https://exam.elevateegy.com/api/v1/subjects`,
    {
      headers:{token:localStorage.getItem('userData')||''}
    }
  )
 }
}

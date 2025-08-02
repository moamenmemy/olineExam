import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { AuthEndPoint } from './enums/authEndPoint';
import { AuthAPIadaptorService } from './enums/adaptor/auth-api.adaptor';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _httpClient=inject (HttpClient)
_authAPIadaptorService=inject(AuthAPIadaptorService)


  constructor() { }

   login(data: any): Observable<any> {
    return this._httpClient.post(AuthEndPoint.LOGIN,data)
    .pipe(map(res=>this._authAPIadaptorService.adapt(res)),
  catchError(err=>of(err))
  
  )
  }
}


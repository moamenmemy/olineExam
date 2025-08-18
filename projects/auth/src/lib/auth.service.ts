import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { AuthEndPoint } from './enums/authEndPoint';
import { AuthAPIadaptorService } from './enums/adaptor/auth-api.adaptor';
import { authApi } from './base/authApi';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements authApi {

  _httpClient=inject (HttpClient)
_authAPIadaptorService=inject(AuthAPIadaptorService)


  constructor() { }

   login(data: any): Observable<any> {
    return this._httpClient.post(AuthEndPoint.LOGIN,data)
    .pipe(map(res=>this._authAPIadaptorService.adapt(res)),
  catchError(err=>of(err))
  
  )
  }

 register(data: any): Observable<any> {
  return this._httpClient.post(AuthEndPoint.SIGNUP,data)
}
 forgotPassword(data: any): Observable<any> {
  return this._httpClient.post(AuthEndPoint.FORFOTPASSWORD,data)
}
 verifyResetCode(data: any): Observable<any> {
   return this._httpClient.post(AuthEndPoint.VERIFY,data)
}
 resetPassword(data: any): Observable<any> {
   return this._httpClient.put(AuthEndPoint.RESET,data)
}
}


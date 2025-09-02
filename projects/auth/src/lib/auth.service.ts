import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { AuthEndPoint } from './enums/authEndPoint';
import { AuthAPIadaptorService } from './enums/adaptor/auth-api.adaptor';
import { authApi } from './base/authApi';
import { SinUp } from './interface/sin-up';
import { Auth } from './interface/auth';
import { SinIn } from './interface/sin-in';
import { ForgotPassword } from './interface/forgot-password';
import { VerifyResetCode } from './interface/verify-reset-code';
import { ResetPassword } from './interface/reset-password';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements authApi {

  _httpClient=inject (HttpClient)
_authAPIadaptorService=inject(AuthAPIadaptorService)


  constructor() { }

   login(data:Auth): Observable<SinIn> {
    return this._httpClient.post(AuthEndPoint.LOGIN,data)
    .pipe(map(res=>this._authAPIadaptorService.adapt(res)),
  catchError(err=>of(err))
  
  )
  }

 register(data:Auth): Observable<SinUp> {
  return this._httpClient.post<SinUp>(AuthEndPoint.SIGNUP,data)
}
 forgotPassword(data: Auth): Observable<ForgotPassword> {
  return this._httpClient.post<ForgotPassword>(AuthEndPoint.FORFOTPASSWORD,data)
}
 verifyResetCode(data: Auth): Observable<VerifyResetCode> {
   return this._httpClient.post<VerifyResetCode>(AuthEndPoint.VERIFY,data)
}
 resetPassword(data:Auth): Observable<ResetPassword> {
   return this._httpClient.put<ResetPassword>(AuthEndPoint.RESET,data)
}
}


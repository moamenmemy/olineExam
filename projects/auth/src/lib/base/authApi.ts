import { Observable } from "rxjs";

import { SinIn } from "../interface/sin-in";
import { ForgotPassword } from "../interface/forgot-password";
import { ResetPassword } from "../interface/reset-password";
import { VerifyResetCode } from "../interface/verify-reset-code";
import { Auth } from "../interface/auth";
import { SinUp } from "../interface/sin-up";


export abstract class authApi{
      abstract login (data:Auth):Observable<SinIn>;
      abstract register  (data:Auth):Observable<SinUp>;
      abstract forgotPassword(data:Auth):Observable<ForgotPassword>;
      abstract resetPassword(data:Auth):Observable<ResetPassword>;
      abstract verifyResetCode(data:Auth):Observable<VerifyResetCode>;
      
}
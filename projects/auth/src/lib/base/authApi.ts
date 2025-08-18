import { Observable } from "rxjs";


export abstract class authApi{
      abstract login (data:any):Observable<any>;
      abstract register  (data:any):Observable<any>;
      abstract forgotPassword(data:any):Observable<any>;
      abstract resetPassword(data:any):Observable<any>;
      abstract verifyResetCode(data:any):Observable<any>;
      
}
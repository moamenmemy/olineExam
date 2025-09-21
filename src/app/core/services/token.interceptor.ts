import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { StorageService } from '../srvices/storage.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';


export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const storage= inject(StorageService)


  const router =inject(Router)


const token = storage.getItem('userData');

const authReq = token
  ? req.clone({
      setHeaders: {
       token: token,
      },
    })
  : req;



  return next(authReq).pipe(
    catchError((err)=>{
      if(err?.status===401){
storage.removeItem('userData')    
    router.navigate(['/auth/login'])
      }
            return throwError(() => err);

    })
  );
};

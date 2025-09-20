import { Component, inject, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from 'auth';
import { Subject as RxSubject, takeUntil } from 'rxjs';
import { appPatterns } from '../../../shared/constants/pattern';
import { StorageService } from '../../srvices/storage.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy {


errmsg:string=''
_authService=inject(AuthService)
_Router=inject(Router)
private destroy$ =new RxSubject<void>();
_storageService=inject(StorageService)
  loginform :FormGroup =new FormGroup({
   
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern( appPatterns.password)]),
    
  })

  submit(){
    console.log(this.loginform.value)
    this._authService.login(this.loginform.value).pipe(takeUntil(this.destroy$)).subscribe({
      next:(res)=>{
       if(res.message=='success'){
        this._Router.navigate(['/home'])
console.log('Login API Response:', res);
       this._storageService.setItem('userData', res.token)
       }
        console.log(res)
      },error:(err)=>{
        this.errmsg=err.error.message
        console.log(err)
      }
    })

  }
ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();
}

}

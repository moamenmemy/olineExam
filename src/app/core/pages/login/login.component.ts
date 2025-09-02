import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from 'auth';

import { appPatterns } from '../../../shared/constants/pattern';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


errmsg:string=''
_authService=inject(AuthService)
_Router=inject(Router)


  loginform :FormGroup =new FormGroup({
   
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern( appPatterns.password)]),
    
  })

  submit(){
    console.log(this.loginform.value)
    this._authService.login(this.loginform.value).subscribe({
      next:(res)=>{
       if(res.message=='success'){
        this._Router.navigate(['/home'])

        localStorage.setItem('userToken',res.Token)
       }
        console.log(res)
      },error:(err)=>{
        this.errmsg=err.error.message
        console.log(err)
      }
    })

  }


}

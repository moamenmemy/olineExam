
import { Component, inject } from '@angular/core';

import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

import { AuthService } from 'auth';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';




@Component({
  selector: 'app-register',
  imports:  [FormsModule,ReactiveFormsModule,NgClass,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
[x: string]: any;

_router=inject (Router)
errmsg:string=''



  registerform :FormGroup =new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    firstName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    lastName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
    rePassword:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
  },this.confirmPassword)

_authService=inject(AuthService)

  submit(){
   console.log(this.registerform.value)
   this._authService.register(this.registerform.value).subscribe({
    next:(res)=>{
      
      if(res.message=="success"){
          this._router.navigate(['auth/login'])
      }
    },error:(err)=>{

      this.errmsg=err.error.message
     
    }
   })
    
  }


  confirmPassword(group:AbstractControl){
    const password =group.get('password')?.value
    const rePassword =group.get('rePassword')?.value


    if(password===rePassword){
      return null
    }else{
      return{mismatch:true}
    }
  }

}

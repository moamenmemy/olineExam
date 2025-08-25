import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'auth';
import { confirmPassword } from '../../../shared/validators/passwordValidators';


@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule,FormsModule,RouterLink,NgClass,],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  [x: string]: any;

errmsg:string=''

  steps:number=1;


  sendEmail:FormGroup= new FormGroup({
     email: new FormControl('',[Validators.required,Validators.email])
  })


  verifyCode:FormGroup =new FormGroup({
    resetCode: new FormControl('',[Validators.required,Validators.pattern(/^\w{6}&/)])
  })

  resetPassword:FormGroup =new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    newPassword: new FormControl('',[Validators.required,Validators.pattern(  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
      rePassword:new FormControl('',[Validators.required]),
  },confirmPassword)

  // confirmPassword(group:AbstractControl){
  //   const password = group.get('newPassword')?.value
  //   const rePassword =group.get('rePassword')?.value


  //   if(password===rePassword){
  //     return null
  //   }else{
  //     return{mismatch:true}
  //   }
  // }





_authService=inject(AuthService);
_router=inject(Router)

submitEmail(){
this._authService.forgotPassword(this.sendEmail.value).subscribe({
  next:(res)=>{
    console.log(res)
    if(res.message=='success'){
      this.steps=2;
    }
  },error:(err)=>{
    console.log(err)

  }
})


}

submitCode(){

this._authService.verifyResetCode(this.verifyCode.value).subscribe({


  next:(res)=>{
    console.log(res)

    if(res.status == "Success"){
      this.steps=3 ;
    }



  },error:(err) =>{

  }
    

})
}

submitPassword(){

  if(this.resetPassword.valid){
    const payload = {
        email: this.resetPassword.get('email')?.value,
        newPassword: this.resetPassword.get('newPassword')?.value
      };



  this._authService.resetPassword(payload).subscribe({


    next:(res)=>{
      console.log(res)
      if(res.message == "success"){
         this._router.navigate(['/home'])
      }
      
    },error:(err)=>{
console.log(err)
    }
  })

}

  }

}

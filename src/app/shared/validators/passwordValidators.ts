
import { AbstractControl, ValidationErrors } from '@angular/forms';

export function   confirmPassword(group:AbstractControl) :ValidationErrors | null{
      const password = group.get('password')?.value || group.get('newPassword')?.value;
    const rePassword =group.get('rePassword')?.value


    if(password===rePassword){
      return null
    }else{
      return{mismatch:true}
    }
  }
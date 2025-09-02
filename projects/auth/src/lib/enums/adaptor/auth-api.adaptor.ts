import { Injectable } from '@angular/core';
import { Adaptor } from '../inteface/adaptor';

@Injectable({
  providedIn: 'root'
})
export class AuthAPIadaptorService implements Adaptor{

  constructor() { }


  adapt(data:any){
    return{
       message:data.message,
       Token:data.token,
       email:data.user.email

    }

  }
}


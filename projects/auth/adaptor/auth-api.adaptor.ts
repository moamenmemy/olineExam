import { Injectable } from '@angular/core';
import { Adaptor } from '../src/lib/enums/inteface/adaptor';


@Injectable({
  providedIn: 'root'
})
export class AuthAPIadaptorService implements Adaptor{

  constructor() { }


  adapt(data:any){
    return{
       message:data.message,
       Token:data.Token,
       email:data.user.email

    }

  }
}


export interface SinIn {

    message: string;
    token: string;
    user:User;
}

export interface User {
  
    email:string;
 
}


export interface AuthModel {
  message: string;
  token: string;
  email: string;
}
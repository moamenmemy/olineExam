import { Observable } from "rxjs";


export abstract class authApi{
      abstract login (data:any):Observable<any>;
}
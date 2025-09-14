import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../srvices/storage.service';

export const checTokenGuard: CanActivateFn = (route, state) => {
let router =inject(Router)

 const storage = inject(StorageService);

 const userData =storage.getItem('userData')

if(userData==null){
  return true;
}else{

  return   router.createUrlTree(['/home']);
}


};

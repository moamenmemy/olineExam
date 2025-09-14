import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { StorageService } from '../../srvices/storage.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

_storageService=inject(StorageService)
_Router=inject(Router)

  logOut(){
this._storageService.removeItem('userData')

this._Router.navigate(['auth/login'])

  }

}

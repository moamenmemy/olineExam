import { Component } from '@angular/core';
import { AuthIntroComponent } from "./component/auth-intro/auth-intro.component";
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../pages/navbar/navbar.component";



@Component({
  selector: 'app-auth-lay-out',
  imports: [AuthIntroComponent, RouterOutlet, NavbarComponent],
  templateUrl: './auth-lay-out.component.html',
  styleUrl: './auth-lay-out.component.scss'
})
export class AuthLayOutComponent {

}

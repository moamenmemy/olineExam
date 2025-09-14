import { Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';
import { checTokenGuard } from './core/guard/chec-token.guard';


export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    {path:"auth",loadComponent:()=>import('./core/layout/auth-lay-out/auth-lay-out.component').then(c=>c.AuthLayOutComponent),canActivate:[checTokenGuard],children:[
       { path: '', redirectTo: 'login', pathMatch: 'full' },
        {path:"login",loadComponent:()=>import('./core/pages/login/login.component').then(c=>c.LoginComponent)},
        {path:"register",loadComponent:()=>import('./core/pages/register/register.component').then(c=>c.RegisterComponent)},
        {path:"forget",loadComponent:()=>import('./core/pages/forget-password/forget-password.component').then(c=>c.ForgetPasswordComponent)},
    ]},

    {path:"home",loadComponent:()=>import('./core/pages/home/home.component').then(c=>c.HomeComponent),canActivate:[authGuard]}
];

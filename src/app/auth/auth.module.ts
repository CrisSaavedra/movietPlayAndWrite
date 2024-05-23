import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authRoutingModule } from './auth-routing.module';
import { Mdb5Module } from '../mdb5/mdb5.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    authRoutingModule,
    Mdb5Module
  ]
})
export class AuthModule { }

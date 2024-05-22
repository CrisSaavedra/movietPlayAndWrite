import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { Mdb5Module } from '../mdb5/mdb5.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    Mdb5Module
  ],
  exports: [
    NavbarComponent
  ]
})
export class ShareModule { }

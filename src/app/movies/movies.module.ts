import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { Mdb5Module } from '../mdb5/mdb5.module';
import { NavbarComponent } from './pages/layout-page/components/navbar/navbar.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    Mdb5Module
  ]
})
export class MoviesModule { }
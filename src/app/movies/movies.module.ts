import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { Mdb5Module } from '../mdb5/mdb5.module';
import { NavbarComponent } from './pages/layout-page/components/navbar/navbar.component';
import { CardsComponent } from './shared/cards/cards.component';
import { FilmsComponent } from './pages/films/films.component';
import { InfoFilmComponent } from './pages/info-film/info-film.component';
import { ListComponent } from './pages/list/list.component';
import { MembersComponent } from './pages/members/members.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    HomeComponent,
    NavbarComponent,
    CardsComponent,
    FilmsComponent,
    InfoFilmComponent,
    ListComponent,
    MembersComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    Mdb5Module,
  ],
})
export class MoviesModule { }

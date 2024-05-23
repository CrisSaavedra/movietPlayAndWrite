import { AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'movies-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent  {

   public film = {
    name: "Peli 1",
    discription: "descripción de la peli",
    primary_image: "https://a.ltrbxd.com/resized/film-poster/7/0/5/2/2/1/705221-furiosa-a-mad-max-saga-0-1000-0-1500-crop.jpg?v=3c0e322842"
  }


} 

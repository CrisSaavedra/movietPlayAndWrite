import { AfterContentInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'movies-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent  {

  @Input() film?: any;

} 

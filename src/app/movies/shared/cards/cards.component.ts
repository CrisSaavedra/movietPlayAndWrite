import { AfterContentInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'movies-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input() film?: any;
  @Input() isAuthenticated?: boolean;


  constructor(private route: Router) { }

  onWatchFilm(event :Event) {
    event.preventDefault()
    if (!this.isAuthenticated) this.route.navigate(['/auth/login'])
    
    // add to watch list
  }

} 

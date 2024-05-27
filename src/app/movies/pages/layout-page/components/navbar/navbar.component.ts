import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'movies-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    
  @Input() isAuthenticated? : boolean;
  @Output() logout  = new EventEmitter();

}

import { Component } from '@angular/core';
import { fakeFilms } from 'src/app/FAKEDB/db';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public films: any[] = fakeFilms

}

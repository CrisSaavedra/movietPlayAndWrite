import { Component } from '@angular/core';
import { fakeFilms } from 'src/app/FAKEDB/db';
import { FakeAuthService } from 'src/app/fakeAuth/fake-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public films: any[] = fakeFilms

  constructor(private fakeAuth: FakeAuthService) { }



  isAuthenticated(): boolean {
    return this.fakeAuth.isLoggedIn()
  }

}

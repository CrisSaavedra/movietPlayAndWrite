import { Component, OnInit } from '@angular/core';
import { fakeFilms } from 'src/app/FAKEDB/db';
import { FakeAuthService } from 'src/app/fakeAuth/fake-auth.service';
import { LocalDBService } from 'src/app/services/api/local-db.service';
import { Film } from 'src/app/shared/interfaces/film.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public films?: Film[] 

  constructor(private fakeAuth: FakeAuthService, private api : LocalDBService) { }

  ngOnInit(): void {
    this.api.getMovies(3).subscribe((response: any) => {
      this.films = response
    })
  }


  isAuthenticated(): boolean {
    return this.fakeAuth.isLoggedIn()
  }

}

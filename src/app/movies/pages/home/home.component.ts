import { Component, OnInit } from '@angular/core';
import { fakeFilms } from 'src/app/FAKEDB/db';
import { FakeAuthService } from 'src/app/fakeAuth/fake-auth.service';
import { LocalDBService } from 'src/app/services/api/local-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public films?: any[] 

  constructor(private fakeAuth: FakeAuthService, private api : LocalDBService) { }

  ngOnInit(): void {
    this.api.getMovies(4).subscribe((response: any) => {
      this.films = response
    })
  }


  isAuthenticated(): boolean {
    return this.fakeAuth.isLoggedIn()
  }

}

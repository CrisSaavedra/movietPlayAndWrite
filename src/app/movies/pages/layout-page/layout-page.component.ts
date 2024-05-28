import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from 'src/app/fakeAuth/fake-auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent implements OnInit {

  constructor(private fakeAuth: FakeAuthService) { }


  ngOnInit(): void {
    if(localStorage.getItem('user_session')){
      let {email, password} = JSON.parse(localStorage.getItem('user_session') || '{}')
      this.fakeAuth.login(email, password).subscribe()
    }
  }

  isAuthenticated(): boolean {
    return this.fakeAuth.isLoggedIn();
  }

  logout() {
    this.fakeAuth.logout();
  }




}

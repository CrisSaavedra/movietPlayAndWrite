import { Component } from '@angular/core';
import { FakeAuthService } from 'src/app/fakeAuth/fake-auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent {

  constructor(private fakeAuth: FakeAuthService) { }


  isAuthenticated(): boolean{
    return this.fakeAuth.isLoggedIn();
  }

  logout(){
    this.fakeAuth.logout()
  }

 

  
}

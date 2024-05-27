import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FakeAuthService } from 'src/app/fakeAuth/fake-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private fakeAuth: FakeAuthService, private router : Router) { }

  login(event : Event){
    event.preventDefault();
    this.fakeAuth.login();
    this.router.navigate(['/home']);
  }

}

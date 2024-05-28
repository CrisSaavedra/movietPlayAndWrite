import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeAuthService } from 'src/app/fakeAuth/fake-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  public loginData = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private fakeAuth: FakeAuthService, private router: Router) { }

  login(event: Event) {
    event.preventDefault();
    let email = this.loginData.get('email')?.value?.toLowerCase();
    let password = this.loginData.get('password')?.value;
    if (email && password) {
      this.fakeAuth.login(email, password).subscribe(response => {        
        if (response.length > 0) this.router.navigate(['/home']);
        else alert('Usuario o contraseña incorrectos');
      });
    }
  }

}

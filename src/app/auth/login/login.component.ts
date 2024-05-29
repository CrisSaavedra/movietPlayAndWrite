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

  public erroUserLogin = false;

  public loginData = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private fakeAuth: FakeAuthService, private router: Router) { }

  login(event: Event) {
    if(this.loginData.invalid){
      this.loginData.markAllAsTouched();
      return;
    }


    event.preventDefault();
    let email = this.loginData.get('email')?.value?.toLowerCase();
    let password = this.loginData.get('password')?.value;
    if (email && password) {
      this.fakeAuth.login(email, password).subscribe(response => {        
        if (response.length > 0){
          this.router.navigate(['/home']);
          this.erroUserLogin = false;
        } 
        else this.erroUserLogin = true;

      });
    }
  }

}

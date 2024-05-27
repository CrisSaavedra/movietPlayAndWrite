import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {


  private isAthenticated: boolean = false;

  constructor() { }

  login(){
    this.isAthenticated = true;
  }

  logout(){
    this.isAthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAthenticated
  }

}

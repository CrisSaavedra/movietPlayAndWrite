import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../shared/interfaces/user.interface';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {


  private isAthenticated: boolean = false;
  private user?: User;
  private AUTH_URL = environment.LOCAL_API + '/users'

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const URL = `${this.AUTH_URL}?email=${email}&password=${password}`
    return this.http.get<User[]>(URL).pipe(
      tap((response: User[]) => {
        if (response.length > 0) {
          this.isAthenticated = true;
          this.user = response[0]
          localStorage.setItem('user_session', JSON.stringify(this.user))
        }
        return response
      }),
      catchError((error: any) => {
        console.log(error);
        return of([])
      })
    )
  }

  logout() {
    this.isAthenticated = false;
    localStorage.removeItem('user_session')
  }

  isLoggedIn(): boolean {
    return this.isAthenticated
  }

}

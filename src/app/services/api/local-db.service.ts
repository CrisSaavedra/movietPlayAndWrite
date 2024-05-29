import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { Film } from 'src/app/shared/interfaces/film.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalDBService {

  private GET_ALL_USERS_URL = environment.LOCAL_API + '/users'
  private GET_ALL_MOVIES_URL = environment.LOCAL_API + '/films'

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.GET_ALL_USERS_URL)
  }

  getMovies(limit?: number) {
    return this.http.get(this.GET_ALL_MOVIES_URL + `?_limit=${limit}`)
  }

  getFilmById(id: string) {
    return this.http.get<Film>(this.GET_ALL_MOVIES_URL + `/${id}`)
      .pipe(
        catchError((error) => {
          console.log(error);
          return of(null)
        })
      )
  }
}

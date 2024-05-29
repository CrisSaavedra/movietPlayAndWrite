import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { Film } from 'src/app/shared/interfaces/film.interface';
import { User } from 'src/app/shared/interfaces/user.interface';
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

  getAllFilms() {
    return this.http.get<Film[]>(this.GET_ALL_MOVIES_URL)

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


  patchFilmTolistUser(userId: string, idFilm: string) {
    let user_session: User = JSON.parse(localStorage.getItem('user') || '{}')
    user_session.watch_films.push(idFilm)
    localStorage.setItem('user_session', JSON.stringify(user_session))
    return this.http.patch(this.GET_ALL_USERS_URL + `/${userId}`, { "watch_films": user_session.watch_films })
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalDBService {

  private GET_ALL_USERS_URL = environment.LOCAL_API + '/users'
  private GET_ALL_MOVIES_URL = environment.LOCAL_API + '/films'

  constructor(private http : HttpClient) { }

  getAllUsers(){
    return this.http.get(this.GET_ALL_USERS_URL)
  }

  getMovies(limit?: number){
    return this.http.get(this.GET_ALL_MOVIES_URL+ `?_limit=${limit}`)
  }
}

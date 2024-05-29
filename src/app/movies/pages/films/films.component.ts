import { Component } from '@angular/core';
import { LocalDBService } from 'src/app/services/api/local-db.service';
import { Film } from 'src/app/shared/interfaces/film.interface';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  public films?: Film[];

  constructor(private api: LocalDBService) { }

  ngOnInit(): void {
    this.api.getAllFilms().subscribe((films: Film[]) => {
      this.films = films;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalDBService } from 'src/app/services/api/local-db.service';
import { Film } from 'src/app/shared/interfaces/film.interface';

@Component({
  selector: 'app-info-film',
  templateUrl: './info-film.component.html',
  styleUrls: ['./info-film.component.scss']
})
export class InfoFilmComponent implements OnInit {

  public film?: Film | null;

  constructor(private route: ActivatedRoute, private api : LocalDBService, private router : Router) { }


  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (!id) this.router.navigate(['/home']);
    this.api.getFilmById(id!).subscribe((film: Film | null) => {
      this.film = film;
    })
  
  }

}

import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { FilmsComponent } from './pages/films/films.component';
import { authGuard } from '../guards/auth-guard.guard';
import { InfoFilmComponent } from './pages/info-film/info-film.component';
import { ListComponent } from './pages/list/list.component';
import { MembersComponent } from './pages/members/members.component';


const routes: Route[] = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'all', component: FilmsComponent },
            { path: 'list', component: ListComponent, canActivate: [authGuard]},
            { path: 'members', component: MembersComponent},
            { path: ':id', component: InfoFilmComponent }
        ]

    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MoviesRoutingModule { }

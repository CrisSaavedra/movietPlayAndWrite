import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { FilmsComponent } from './pages/films/films.component';
import { authGuard } from '../guards/auth-guard.guard';


const routes: Route[] = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'all', component: FilmsComponent, canActivate: [authGuard]},

        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MoviesRoutingModule { }

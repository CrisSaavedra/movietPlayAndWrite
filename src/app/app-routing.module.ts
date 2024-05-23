import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/error404-page/error404-page.component';



const routes: Routes = [

  {
    path: 'home', 
    loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    component: Error404PageComponent
  }
];
  	
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './share/error404/error404.component';


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
    component: Error404Component
  }
];
  	
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

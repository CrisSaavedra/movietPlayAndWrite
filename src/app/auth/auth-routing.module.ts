import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Error404PageComponent } from '../shared/error404-page/error404-page.component';

const routes: Route[] = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: '**', component: Error404PageComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class authRoutingModule { }

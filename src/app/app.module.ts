import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Error404PageComponent } from './shared/error404-page/error404-page.component';
import { FakeAuthService } from './fakeAuth/fake-auth.service';




@NgModule({
  declarations: [
    AppComponent,
    Error404PageComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,

  ],
  providers: [FakeAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

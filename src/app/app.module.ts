import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {AuthService} from './security/auth.service';
import {AuthGuard} from './security/auth.guard';



import { AppComponent } from './app.component';
import { SubrouteComponent } from './subroute/subroute.component';

import { ROUTES } from './app.routes';
import { LoginComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SubrouteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
      AuthService,AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

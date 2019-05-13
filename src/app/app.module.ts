import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

//Componenets
import { AppComponent } from './app.component';
import { LoginComponent } from 'projects/user-module/src/lib/login/login.component'
import { SocialloginComponent } from 'projects/user-module/src/lib/sociallogin/sociallogin.component'

//Services
import { LoginService } from 'projects/user-module/src/lib/login/login.service'

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login', component: SocialloginComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SocialloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MDBBootstrapModule.forRoot()

  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]

})
export class AppModule { }

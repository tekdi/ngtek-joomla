import { Component,OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngtek-content-lib';
  userLogin = ['facebook', 'manual-login', 'google'];

  SignInUserData(event) {
    console.log(event);
  }
}


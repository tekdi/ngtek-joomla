import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'projects/user-login/src/lib/providers/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userAction;

  constructor(public login: LoginService, public route: Router) { }

  ngOnInit() {
    this.userActionName();
  }

  userActionName() {
    this.userAction = this.login.isLoggedIn() ? 'Log Out' : 'Login & Signup';
    console.log(this.userAction);
  }

  loginOrLogout() {
    if (!this.login.isLoggedIn()) {
      this.route.navigate(['/user']);
    } else {
      this.login.logout();
    }

    this.userActionName();
  }
}

import { Component, OnInit, Inject, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ngtek-joomla-login',
  templateUrl: './user-login.component.html',
  styles: []
})
export class UserLoginComponent implements OnInit {
  facebook: boolean;
  google: boolean;
  manualLogin: boolean;
  isUserLoggedIn: boolean = false;
  @Input() navUrl: string;
  @Input() userLogin: string;
  @Output() signInUserData = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    console.log(this.navUrl);
    if (this.userLogin) {
      this.facebook = this.userLogin.includes("facebook"); // true
      this.google = this.userLogin.includes("google"); // true
      this.manualLogin = this.userLogin.includes("manual-login"); // true
    }
    else {
      this.manualLogin = true;
    }
  }

  getLoginUserData(data) {
    this.signInUserData.emit(data);

  }

}

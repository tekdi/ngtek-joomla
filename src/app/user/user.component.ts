import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userLogin: any;
  navUrl: string;
  constructor() {
    this.userLogin = ['facebook', 'manual-login', 'google'];
    this.navUrl = 'articles';
  }

  ngOnInit() {
  }

  SignInUserData(event) {
    console.log(event);
  }
}

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from 'projects/user-login/src/lib/providers/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(public auth: AuthService, public router: Router, public login: LoginService) {
  }

  canActivate(): boolean {
    if (this.login.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['user']);

    return false;
  }



}

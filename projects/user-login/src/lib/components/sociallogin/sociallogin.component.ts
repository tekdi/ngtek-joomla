
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { AuthService, SocialUser } from 'angularx-social-login';
import { SocialloginService } from '../../providers/sociallogin.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-joomla-sociallogin',
  templateUrl: './sociallogin.component.html',
  styleUrls: ['./sociallogin.component.scss']
})

export class SocialloginComponent implements OnInit {
  @Input() facebook: boolean;
  @Input() google: boolean;
  @Input() navUrl: string;
  @Output() loginUserData = new EventEmitter();
  siteUrl: string;

  loggedIn: any;
  constructor(private authService: AuthService,
    private socialloginService: SocialloginService,
    private router: Router
  ) {
    this.siteUrl = localStorage.getItem('baseUrl');
    //alert(this.siteUrl);
  }

  ngOnInit() {
    this.socialloginService.init(this.siteUrl);
    this.authService.authState.subscribe((user) => {
      this.loggedIn = (user != null);
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res => {
      this.socialloginService.doSocialLogin(res.authToken, res.provider).then(res => {
        if (this.navUrl && res['data']) {
          this.router.navigate(['/' + this.navUrl]);
        } else {
          this.loginUserData.emit(res);
        }
      });
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(res => {
      this.socialloginService.doSocialLogin(res.authToken, res.provider).then(res => {
        if (this.navUrl && res['data']) {
          this.router.navigate(['/' + this.navUrl]);
        } else {
          this.loginUserData.emit(res);
        }
      });
    });
  }

  signOut(): void {
    this.socialloginService.logout();
    this.authService.signOut().then(res => {
      alert('Successfully signOut');
    });
  }

}

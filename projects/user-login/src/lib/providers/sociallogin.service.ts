import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialloginService {
  socialloginApi: string = '/index.php?option=com_api&app=users&resource=jfbconnect';
  baseUrl: '';
  headers: any;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  constructor(private http: HttpClient, private router: Router,  private zone :NgZone) {
    this.headers = new HttpHeaders();
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

  }

  public init(siteUrl) {
    this.baseUrl = siteUrl;
    return this;
  }

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.zone.run(() => {
      this.router.navigate(['/login']);
      });
  }
  
  doSocialLogin(accessToken, provider) {
    let payloaddata = '&access_token=' + accessToken + '&provider=' + provider;

    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.headers.append('Access-Control-Allow-Origin', '*');

    let userData =
    {
      'access_token': accessToken,
      'provider': provider
    }

    return new Promise(resolve => { 
       this.http.post(this.baseUrl + this.socialloginApi, userData, { headers: this.headers })
        .subscribe(res => {
          localStorage.setItem('currentUser', JSON.stringify(res['data']));
          this.currentUserSubject.next(res['data']);
          resolve(res);
          alert(' Login Successfully');
        });
    });
  }
}

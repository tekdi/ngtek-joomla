import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginApi: string = '/index.php?option=com_api&app=users&resource=login';
  baseUrl: '';
  headers: any;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'X-Auth': 'login' });
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public init(config) {
    this.baseUrl = config.apiBaseUrl;
    console.log(config);

    return this;
  }

  public login(username, password) {
    let formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    //this.baseUrl + this.loginApi,
    return this.http.post(
      'http://demo.appcarvers.com/junite' + this.loginApi,
      formData,
      { headers: this.headers }).pipe(map(user => {
        if (!user['err_code'] && (user['data'].auth || user['data'].id)) {
          localStorage.setItem('currentUser', JSON.stringify(user['data']));
          this.currentUserSubject.next(user['data']);
        }

        return user['data'];
      }));
  }

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  public getCurrentUser() {
    return this.currentUserSubject.value;
  }

  public isLoggedIn() {
    let user = this.getCurrentUser();

    return user.auth ? true : false;
  }

}

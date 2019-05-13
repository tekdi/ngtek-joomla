import { Component, OnInit,  Input } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Service
import { LoginService } from 'projects/user-module/src/lib/login/login.service'
import { Console } from '@angular/core/src/console';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-joomla-login',
  templateUrl: './login.component.html',
  styleUrls: []

})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  @Input() siteUrl : string;
  @Input() redirectPage: string;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  get f() { return this.loginForm.controls; }

  public doLogin() {
    this.loginService.login(this.f.username.value, this.f.password.value).subscribe((res) => {
      console.log(res.result.id);
      localStorage.setItem('userId', res.result.id);
      localStorage.setItem('auth', res.result.token);
      //this.router.navigate(['/' + this.redirectPage]);
      alert('Login Successfully');
    });
  }

}

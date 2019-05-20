import { NgModule, InjectionToken, ModuleWithProviders } from "@angular/core";
import { UserLoginComponent } from "./user-login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { UserRoutingModule } from "./user-login-routing.module";

//Componenets
import { SocialloginComponent } from "./components/sociallogin/sociallogin.component";
import { LoginComponent } from "./components/login/login.component";

//Providers
import { LoginService } from "./providers/login.service";

//Social login third party module
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider
} from "angularx-social-login";
//import { MDBBootstrapModule } from 'angular-bootstrap-md';

const userRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "sociallogin", component: SocialloginComponent }
];

var googleClientId;
var fbAppId;
var configsocial;

interface ComponenetsInterface {
  googleClientId: string;
  fbAppId: string;
  baseUrl: string;
}

const ContentFulData = new InjectionToken<ComponenetsInterface>(
  "ComponenetsInterface"
);

@NgModule({
  declarations: [UserLoginComponent, LoginComponent, SocialloginComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocialLoginModule,
    // MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(userRoutes),
    UserRoutingModule
  ],
  exports: [
    UserLoginComponent,
    LoginComponent,
    SocialloginComponent,
    RouterModule
  ],
  providers: [
    LoginService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ]
})
export class UserLoginModule {
  static forRoot(config: ComponenetsInterface): ModuleWithProviders {
    console.log(config);

    googleClientId = config.googleClientId;
    localStorage.setItem("fbAppId", fbAppId);
    localStorage.setItem("googleClientId", googleClientId);
    localStorage.setItem("baseUrl", config.baseUrl);

    fbAppId = config.fbAppId;
    return {
      ngModule: UserLoginModule,
      providers: [
        {
          provide: ContentFulData,
          useValue: config
        }
      ]
    };
  }
}

configsocial = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(localStorage.getItem("googleClientId"))
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider(localStorage.getItem("fbAppId"))
  }
]);

function provideConfig() {
  return configsocial;
}

@NgModule({
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ]
})
export class UserLoginModules extends UserLoginModule {}

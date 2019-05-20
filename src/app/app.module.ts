import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentLibModule } from 'projects/content-lib/src/lib/content-lib.module';
import { UserLoginModule } from 'projects/user-login/src/lib/user-login.module';

import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DetailsComponent } from './details/details.component';
import { UserComponent } from './user/user.component';

const config = {
  googleClientId : '312478341535-t542no2kv0ffdskdshkreas4drf1ihc1.apps.googleusercontent.com',
  fbAppId : '2037079629930934',
  baseUrl: 'https://smart-citizen.tekdi.net'
};

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HeaderComponent,
    ListComponent,
    ArticleEditComponent,
    DetailsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ContentLibModule.forRoot(environment),
    FormsModule,
    AngularEditorModule,
    UserLoginModule.forRoot(config)
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

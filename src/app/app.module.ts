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



@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HeaderComponent,
    ListComponent,
    ArticleEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ContentLibModule.forRoot(environment)
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

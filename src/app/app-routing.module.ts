import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';


const routes: Routes = [
  { path: '', component: ArticleComponent },
  { path: 'articles', component: ArticleComponent },
  { path: 'article/:id', component: ArticleEditComponent },
  { path: 'article', component: ArticleEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

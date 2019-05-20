import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ListComponent } from './list/list.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: ArticleComponent },
  { path: 'articles', component: ArticleComponent },
  { path: 'article/:id', component: ArticleEditComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'article', component: ArticleEditComponent },
  { path: 'blogs', component: ArticleComponent},
  { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ListComponent } from './list/list.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { DetailsComponent } from './details/details.component';
import { UserComponent } from './user/user.component';
import { AuthService } from './core/auth.service';

const routes: Routes = [
  { path: '', component: ArticleComponent },
  { path: 'articles', component: ArticleComponent },
  { path: 'article/:id', component: ArticleEditComponent, canActivate: [AuthService]},
  { path: 'article', component: ArticleEditComponent, canActivate: [AuthService]},
  { path: 'details/:id', component: DetailsComponent },
  { path: 'blogs', component: ArticleComponent},
  { path: 'list', component: ListComponent },
  { path: 'user', component: UserComponent },
  { path: '**', redirectTo: 'user' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

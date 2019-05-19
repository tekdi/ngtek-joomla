import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ListComponent } from './list/list.component';


const appRoutes: Routes = 
[ 
  {
    path: 'blogs', component: ArticleComponent
  },
  {
    path: 'list', component: ListComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

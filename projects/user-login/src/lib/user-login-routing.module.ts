import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const userRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './components/users/new-user/new-user.component';

export const routes: Routes = [
  {
    path: 'register',
    component: NewUserComponent,
  }
  /*  {
     path: 'login',
     component: LoginComponent
   }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

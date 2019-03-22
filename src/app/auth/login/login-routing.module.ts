import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {LoginConsoleComponent} from './login-console/login-console.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent,
  children: [{
    path: '',
    component: LoginConsoleComponent
  }]
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }

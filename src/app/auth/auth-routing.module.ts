import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';

const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [{
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
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
export class AuthRoutingModule { }

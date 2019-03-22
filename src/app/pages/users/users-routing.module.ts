import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users.component';
import {UsersListComponent} from './users-list/users-list.component';
import {UsersDetailComponent} from './users-detail/users-detail.component';

const routes: Routes = [{
  path: '',
  component: UsersComponent,
  children: [{
    path: '',
    component: UsersListComponent
  }, {
    path: ':id',
    component: UsersDetailComponent
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
export class UsersRoutingModule { }

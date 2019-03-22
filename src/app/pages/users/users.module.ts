import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {UsersRoutingModule} from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';

@NgModule({
  declarations: [UsersComponent, UsersListComponent, UsersDetailComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }

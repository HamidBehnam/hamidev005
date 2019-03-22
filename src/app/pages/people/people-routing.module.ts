import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PeopleComponent} from './people.component';
import {PeopleListComponent} from './people-list/people-list.component';
import {PeopleDetailComponent} from './people-detail/people-detail.component';

const routes: Routes = [{
  path: '',
  component: PeopleComponent,
  children: [{
    path: '',
    component: PeopleListComponent
  }, {
    path: ':id',
    component: PeopleDetailComponent
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
export class PeopleRoutingModule { }

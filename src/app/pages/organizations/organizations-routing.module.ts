import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {OrganizationsComponent} from './organizations.component';
import {OrganizationsListComponent} from './organizations-list/organizations-list.component';
import {OrganizationsDetailComponent} from './organizations-detail/organizations-detail.component';

const routes: Routes = [{
  path: '',
  component: OrganizationsComponent,
  children: [{
    path: '',
    component: OrganizationsListComponent
  }, {
    path: ':id',
    component: OrganizationsDetailComponent
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
export class OrganizationsRoutingModule { }

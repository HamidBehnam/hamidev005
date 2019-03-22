import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationsComponent } from './organizations.component';
import { OrganizationsListComponent } from './organizations-list/organizations-list.component';
import { OrganizationsDetailComponent } from './organizations-detail/organizations-detail.component';
import {OrganizationsRoutingModule} from './organizations-routing.module';

@NgModule({
  declarations: [OrganizationsComponent, OrganizationsListComponent, OrganizationsDetailComponent],
  imports: [
    CommonModule,
    OrganizationsRoutingModule
  ]
})
export class OrganizationsModule { }

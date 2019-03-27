import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationsComponent } from './organizations.component';
import { OrganizationsListComponent } from './organizations-list/organizations-list.component';
import { OrganizationsDetailComponent } from './organizations-detail/organizations-detail.component';
import {OrganizationsRoutingModule} from './organizations-routing.module';
import {OrganizationsCoordinatorService} from './utils/services/organizations-coordinator.service';
import {NbCardModule} from '@nebular/theme';

@NgModule({
  declarations: [OrganizationsComponent, OrganizationsListComponent, OrganizationsDetailComponent],
  imports: [
    CommonModule,
    OrganizationsRoutingModule,
    NbCardModule
  ],
  providers: [
    OrganizationsCoordinatorService
  ]
})
export class OrganizationsModule { }

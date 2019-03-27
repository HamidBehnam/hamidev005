import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationsComponent } from './organizations.component';
import { OrganizationsListComponent } from './organizations-list/organizations-list.component';
import { OrganizationsDetailComponent } from './organizations-detail/organizations-detail.component';
import {OrganizationsRoutingModule} from './organizations-routing.module';
import {OrganizationsCoordinatorService} from './utils/services/organizations-coordinator.service';
import {NbButtonModule, NbCardModule} from '@nebular/theme';
import { OrganizationsListItemComponent } from './organizations-list-item/organizations-list-item.component';

@NgModule({
  declarations: [OrganizationsComponent, OrganizationsListComponent, OrganizationsDetailComponent, OrganizationsListItemComponent],
  imports: [
    CommonModule,
    OrganizationsRoutingModule,
    NbCardModule,
    NbButtonModule
  ],
  providers: [
    OrganizationsCoordinatorService
  ]
})
export class OrganizationsModule { }

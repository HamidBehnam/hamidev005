import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationsComponent } from './organizations.component';
import { OrganizationsListComponent } from './organizations-list/organizations-list.component';
import { OrganizationsDetailComponent } from './organizations-detail/organizations-detail.component';
import {OrganizationsRoutingModule} from './organizations-routing.module';
import {OrganizationsCoordinatorService} from './utils/services/organizations-coordinator.service';
import {NbCardModule, NbPopoverModule} from '@nebular/theme';
import { OrganizationsListItemComponent } from './organizations-list-item/organizations-list-item.component';
import { OrganizationsServicesPopoverComponent } from './organizations-services-popover/organizations-services-popover.component';

@NgModule({
  declarations: [OrganizationsComponent, OrganizationsListComponent, OrganizationsDetailComponent, OrganizationsListItemComponent, OrganizationsServicesPopoverComponent],
  imports: [
    CommonModule,
    OrganizationsRoutingModule,
    NbCardModule,
    NbPopoverModule
  ],
  providers: [
    OrganizationsCoordinatorService
  ],
  entryComponents: [
    OrganizationsServicesPopoverComponent
  ]
})
export class OrganizationsModule { }

import {Component, Input, OnInit} from '@angular/core';
import {OrganizationsServicesPopoverComponent} from '../organizations-services-popover/organizations-services-popover.component';

@Component({
  selector: 'app-organizations-list-item',
  templateUrl: './organizations-list-item.component.html',
  styleUrls: ['./organizations-list-item.component.sass']
})
export class OrganizationsListItemComponent implements OnInit {
  @Input() organization: any;
  organizationsServicesPopover = OrganizationsServicesPopoverComponent;

  constructor() { }

  ngOnInit() {
  }

}

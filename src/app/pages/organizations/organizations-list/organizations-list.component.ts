import { Component, OnInit } from '@angular/core';
import {OrganizationsCoordinatorService} from '../utils/services/organizations-coordinator.service';

@Component({
  selector: 'app-organizations-list',
  templateUrl: './organizations-list.component.html',
  styleUrls: ['./organizations-list.component.scss']
})
export class OrganizationsListComponent implements OnInit {
  comments: any[];

  constructor(private organizationsCoordinator: OrganizationsCoordinatorService) { }

  ngOnInit() {
    this.organizationsCoordinator.comments.subscribe(data => this.comments = data);
  }

}

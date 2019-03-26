import { Component, OnInit } from '@angular/core';
import {DataCommunicatorService} from '../../shared/utils/services/data-communicator.service';
import {OrganizationsCoordinatorService} from './utils/services/organizations-coordinator.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  constructor(private dataCommunicator: DataCommunicatorService, private organizationsCoordinator: OrganizationsCoordinatorService) { }

  ngOnInit() {
    this.dataCommunicator.getComments().subscribe(data => this.organizationsCoordinator.comments.next(data));
  }

}

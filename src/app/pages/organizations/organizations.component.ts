import { Component, OnInit } from '@angular/core';
import {DataCommunicatorService} from '../../shared/utils/services/data-communicator.service';
import {OrganizationsCoordinatorService} from './utils/services/organizations-coordinator.service';
import {Params} from '@angular/router';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  constructor(private dataCommunicator: DataCommunicatorService, private organizationsCoordinator: OrganizationsCoordinatorService) { }

  ngOnInit() {
    this.organizationsCoordinator.filterParamsSubject.subscribe(filterParams => this.getComments(filterParams));
    this.organizationsCoordinator.selectedCommentId.subscribe(selectedCommentId => this.getComment(selectedCommentId));
  }

  getComments(params: Params) {
    this.dataCommunicator.getComments(params).subscribe(data => this.organizationsCoordinator.comments.next(data));
  }

  getComment(commentId: number) {
    this.organizationsCoordinator.comment.next({});
    this.dataCommunicator.getComment(commentId).subscribe(data => this.organizationsCoordinator.comment.next(data));
  }
}

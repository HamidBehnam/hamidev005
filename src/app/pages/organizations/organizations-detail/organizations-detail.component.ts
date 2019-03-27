import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrganizationsCoordinatorService} from '../utils/services/organizations-coordinator.service';

@Component({
  selector: 'app-organizations-detail',
  templateUrl: './organizations-detail.component.html',
  styleUrls: ['./organizations-detail.component.scss']
})
export class OrganizationsDetailComponent implements OnInit {
  organizationId: number;
  comment: any;

  constructor(public route: ActivatedRoute, private organizationsCoordinator: OrganizationsCoordinatorService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.organizationId = params.id;
      this.organizationsCoordinator.selectedCommentId.next(params.id);
    });

    this.organizationsCoordinator.comment.subscribe(data => this.comment = data);
  }

}

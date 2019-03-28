import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OrganizationsCoordinatorService} from '../utils/services/organizations-coordinator.service';
import {isNumber} from 'util';

@Component({
  selector: 'app-organizations-detail',
  templateUrl: './organizations-detail.component.html',
  styleUrls: ['./organizations-detail.component.scss']
})
export class OrganizationsDetailComponent implements OnInit {
  organizationId: number;
  comment: any;
  organization: any;

  constructor(public route: ActivatedRoute, private organizationsCoordinator: OrganizationsCoordinatorService, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.organizationId = params.id;

      if (!Array.from(Array(11).keys()).slice(1).includes(+ this.organizationId)) {
        this.router.navigate(['/organizations', 1]);
      }

      this.organizationsCoordinator.selectedCommentId.next(params.id);
      this.organizationsCoordinator.selectedOrganizationId.next(params.id);
    });

    this.organizationsCoordinator.comment.subscribe(data => this.comment = data);
    this.organizationsCoordinator.organization.subscribe(data => this.organization = data);
  }

}

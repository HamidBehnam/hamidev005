import { Component, OnInit } from '@angular/core';
import {OrganizationsCoordinatorService} from '../utils/services/organizations-coordinator.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-organizations-list',
  templateUrl: './organizations-list.component.html',
  styleUrls: ['./organizations-list.component.scss']
})
export class OrganizationsListComponent implements OnInit {
  comments: any[];
  currentFilterParams: Params;
  organizations: any[];

  constructor(
    private organizationsCoordinator: OrganizationsCoordinatorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(filterParams => {
      this.currentFilterParams = filterParams;
      this.organizationsCoordinator.filterParamsSubject.next(this.currentFilterParams);
    });

    this.organizationsCoordinator.comments.subscribe(data => this.comments = data);

    this.organizationsCoordinator.organizations.subscribe(data => this.organizations = data);
  }

  filterComments(filterParams: any) {
    this.router.navigate(['/organizations'], {
      queryParams: {
        ...this.currentFilterParams,
        ...filterParams
      }
    });
  }

  resetFilters() {
    this.router.navigate(['/organizations'], {
      queryParams: {}
    });
  }
}

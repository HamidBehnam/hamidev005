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
  organizations = [{
    name: 'The Organization1',
    id: 1,
    logo: 'https://picsum.photos/100/150/?random&id=1',
    location: 'Los Angeles, CA',
    services_count: 3,
    members_count: 5,
    active_since: '02/03/2015'
  }, {
    name: 'The Organization2',
    id: 2,
    logo: 'https://picsum.photos/100/150/?random&id=2',
    location: 'Los Angeles, CA',
    services_count: 2,
    members_count: 3,
    active_since: '02/03/2015'
  }, {
    name: 'The Organization3',
    id: 3,
    logo: 'https://picsum.photos/100/150/?random&id=3',
    location: 'Los Angeles, CA',
    services_count: 5,
    members_count: 7,
    active_since: '02/03/2012'
  }];

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

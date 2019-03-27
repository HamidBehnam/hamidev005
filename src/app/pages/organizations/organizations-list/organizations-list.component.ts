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
  sample = {
    name: 'The Organization',
    id: 1,
    logo: '',
    location: '',
    profession: ['Profession1', 'Profession2', 'Profession3'],
    members: '',
    services: ['Service1', 'Service2', 'Service3'],
    foundation_date: '02/03/2015'
  };

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

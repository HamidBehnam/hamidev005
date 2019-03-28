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
  organization = {
    name: 'The Organization1',
    id: 1,
    logo: 'https://picsum.photos/200/250/?random&id=1',
    location: 'Los Angeles, CA',
    services: [{
      id: 1,
      name: 'Service1',
      info: 'Info for Services1',
      projects: '3'
    }, {
      id: 2,
      name: 'Service2',
      info: 'Info for Services2',
      projects: '6'
    }, {
      id: 3,
      name: 'Service3',
      info: 'Info for Services3',
      projects: '2'
    }],
    members: [{
      id: 1,
      full_name: 'John Smith',
      profession: 'Networking',
      member_since: '02/03/2018'
    }, {
      id: 2,
      full_name: 'Edward Smith',
      profession: 'Consulting',
      member_since: '07/04/2017'
    }, {
      id: 3,
      full_name: 'Eva Fork',
      profession: 'Instruction',
      member_since: '04/08/2016'
    }],
    active_since: '02/03/2015'
  };

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

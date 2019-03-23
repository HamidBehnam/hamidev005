import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-organizations-detail',
  templateUrl: './organizations-detail.component.html',
  styleUrls: ['./organizations-detail.component.scss']
})
export class OrganizationsDetailComponent implements OnInit {
  organizationId: number;

  constructor(public route: ActivatedRoute) {
    this.route.params.subscribe(params => this.organizationId = params.id);
  }

  ngOnInit() {
  }

}

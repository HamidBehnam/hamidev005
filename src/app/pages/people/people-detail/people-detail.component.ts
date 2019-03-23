import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {
  personId: number;

  constructor(public route: ActivatedRoute) {
    this.route.params.subscribe(params => this.personId = params.id);
  }

  ngOnInit() {
  }

}

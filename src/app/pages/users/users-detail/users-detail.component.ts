import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.sass']
})
export class UsersDetailComponent implements OnInit {
  userId: number;

  constructor(public route: ActivatedRoute) {
    this.route.params.subscribe(params => this.userId = params.id);
  }

  ngOnInit() {
  }

}

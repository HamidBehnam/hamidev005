import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-organizations-list-item',
  templateUrl: './organizations-list-item.component.html',
  styleUrls: ['./organizations-list-item.component.scss']
})
export class OrganizationsListItemComponent implements OnInit {
  @Input() organization: any;

  constructor() { }

  ngOnInit() {
  }

}

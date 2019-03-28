import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Params} from '@angular/router';

// since the service is not gonna be used anywhere else, 'providedIn' has been
// removed and the service is registered in the current module instead
@Injectable()
export class OrganizationsCoordinatorService {
  comment: BehaviorSubject<any>;
  comments: BehaviorSubject<any>;
  selectedCommentId: Subject<number>;
  filterParamsSubject: Subject<Params>;
  organizations: BehaviorSubject<any>;
  organization: BehaviorSubject<any>;
  selectedOrganizationId: Subject<number>;

  constructor() {
    this.comments = new BehaviorSubject<any>([]);
    this.comment = new BehaviorSubject({});
    this.selectedCommentId = new Subject<number>();
    this.filterParamsSubject = new Subject<Params>();
    this.organizations = new BehaviorSubject<any>([]);
    this.organization = new BehaviorSubject<any>({});
    this.selectedOrganizationId = new Subject<number>();
  }
}

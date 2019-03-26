import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

// since the service is not gonna be used anywhere else, 'providedIn' has been
// removed and the service is registered in the current module instead
@Injectable()
export class OrganizationsCoordinatorService {
  comments: BehaviorSubject<any>;

  constructor() {
    this.comments = new BehaviorSubject<any>([]);
  }
}

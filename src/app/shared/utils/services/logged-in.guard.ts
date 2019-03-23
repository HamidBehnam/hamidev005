import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {NbDialogService} from '@nebular/theme';
import {ProtectedContentModalComponent} from '../../protected-content-modal/protected-content-modal.component';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  userDataIsLoaded: boolean;
  userIsAuthenticated: boolean;
  userDataAnnouncer: Subject<boolean>;

  constructor(private authentication: AuthenticationService, private router: Router, private dialogService: NbDialogService) {
    this.userDataIsLoaded = this.authentication.userDataIsLoaded;
    this.userIsAuthenticated = this.authentication.userIsAuthenticated;
    this.userDataAnnouncer = this.authentication.userDataAnnouncer;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.userDataIsLoaded) {

      if (!this.userIsAuthenticated) {
        this.navigateAndShowProtectedContentModal();
      }

      return this.userIsAuthenticated;
    } else {

      this.userDataAnnouncer.subscribe(result => {
        if (!result) {
          this.navigateAndShowProtectedContentModal();
        }
      });

      return this.userDataAnnouncer;
    }
  }

  navigateAndShowProtectedContentModal() {

    this.router.navigate(['/auth/login']).then(() => {
      this.dialogService.open(ProtectedContentModalComponent);
    });
  }
}

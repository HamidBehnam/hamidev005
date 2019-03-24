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

  constructor(private authentication: AuthenticationService, private router: Router, private dialogService: NbDialogService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authentication.userDataIsLoaded) {

      if (!this.authentication.userIsAuthenticated) {
        this.navigateAndShowProtectedContentModal();
      }

      return this.authentication.userIsAuthenticated;
    } else {

      this.authentication.userDataAnnouncer.subscribe(result => {
        if (!result) {
          this.navigateAndShowProtectedContentModal();
        }
      });

      return this.authentication.userDataAnnouncer;
    }
  }

  navigateAndShowProtectedContentModal() {

    this.router.navigate(['/auth/login']).then(() => {
      this.dialogService.open(ProtectedContentModalComponent);
    });
  }
}

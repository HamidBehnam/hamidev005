import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {NbDialogService} from '@nebular/theme';
import {ProtectedContentModalComponent} from '../../protected-content-modal/protected-content-modal.component';
import {AuthenticationStatus} from '../enums/authentication-status.enum';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  private authentication: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private authenticationService: AuthenticationService, private router: Router, private dialogService: NbDialogService) {

    this.init();
  }

  init() {

    this.authenticationService.authenticationAnnouncer.subscribe(authorizationData => {

      if (authorizationData.authorizationStatus !== AuthenticationStatus.Loading) {

        this.authentication.next(authorizationData.authorizationStatus === AuthenticationStatus.Authorized);

        if (authorizationData.authorizationStatus === AuthenticationStatus.NotAuthorized) {

          this.navigateAndShowProtectedContentModal();
        }
      }
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return new Observable<boolean>(observer => {
      this.authentication.subscribe(result => observer.next(result));
    });
  }

  navigateAndShowProtectedContentModal() {

    this.router.navigate(['/auth/login']).then(() => {
      this.dialogService.open(ProtectedContentModalComponent);
    });
  }
}

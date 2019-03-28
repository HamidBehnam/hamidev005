import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {NbDialogService} from '@nebular/theme';
import {ProtectedContentModalComponent} from '../../protected-content-modal/protected-content-modal.component';
import {AuthenticationStatus} from '../enums/authentication-status.enum';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router, private dialogService: NbDialogService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return new Observable<boolean>(observer => {

      this.authenticationService.authenticationAnnouncer.subscribe(authorizationData => {

        if (authorizationData.authorizationStatus !== AuthenticationStatus.Loading) {

          observer.next(authorizationData.authorizationStatus === AuthenticationStatus.Authorized);

          if (authorizationData.authorizationStatus === AuthenticationStatus.NotAuthorized) {

            this.navigateAndShowProtectedContentModal();
          }
        }
      });
    });
  }

  navigateAndShowProtectedContentModal() {

    this.router.navigate(['/auth/login']).then(() => {
      this.dialogService.open(ProtectedContentModalComponent);
    });
  }
}

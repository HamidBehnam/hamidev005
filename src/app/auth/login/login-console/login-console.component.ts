import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../shared/utils/services/authentication.service';
import {Router} from '@angular/router';
import {AuthenticationStatus} from '../../../shared/utils/enums/authentication-status.enum';

@Component({
  selector: 'app-login-console',
  templateUrl: './login-console.component.html',
  styleUrls: ['./login-console.component.scss']
})
export class LoginConsoleComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  signInGoogle() {
    this.authenticationService.signInGoogle();

    this.authenticationService.authenticationAnnouncer.subscribe(authenticationData => {
      if (authenticationData.authorizationStatus === AuthenticationStatus.Authorized) {
        this.router.navigate(['/organizations']);
      }
    });
  }

  signOut() {
    this.authenticationService.signOut();
  }
}

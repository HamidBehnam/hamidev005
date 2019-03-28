import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../shared/utils/services/authentication.service';

@Component({
  selector: 'app-login-console',
  templateUrl: './login-console.component.html',
  styleUrls: ['./login-console.component.scss']
})
export class LoginConsoleComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  signInGoogle() {
    this.authenticationService.signInGoogle();
  }

  signOut() {
    this.authenticationService.signOut();
  }
}

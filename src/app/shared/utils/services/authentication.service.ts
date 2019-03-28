import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {BehaviorSubject} from 'rxjs';
import {AuthenticationStatus} from '../enums/authentication-status.enum';
import {AuthenticationData} from '../interfaces/authentication-data';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public authenticationAnnouncer: BehaviorSubject<AuthenticationData>;
  private authenticationData: AuthenticationData;

  constructor(private angularFireAuth: AngularFireAuth) {

    this.init();
  }

  init() {

    this.authenticationData = {
      authorizationStatus: AuthenticationStatus.Loading,
      userData: null
    };

    this.authenticationAnnouncer = new BehaviorSubject<AuthenticationData>(this.authenticationData);

    this.angularFireAuth.user.subscribe(result => {

      this.authenticationData.authorizationStatus = !!result ?
        AuthenticationStatus.Authorized :
        AuthenticationStatus.NotAuthorized;

      this.authenticationData.userData = result;

      this.authenticationAnnouncer.next(this.authenticationData);
    }, () => {

      this.authenticationData.authorizationStatus = AuthenticationStatus.NotAuthorized;

      this.authenticationData.userData = null;


      this.authenticationAnnouncer.next(this.authenticationData);
    });
  }

  get userDataIsLoading() {
    return this.authenticationData.authorizationStatus === AuthenticationStatus.Loading;
  }

  get userIsAuthorized() {
    return this.authenticationData.authorizationStatus === AuthenticationStatus.Authorized;
  }

  get userIsNotAuthorized() {
    return this.authenticationData.authorizationStatus === AuthenticationStatus.NotAuthorized;
  }

  get userData() {
    return this.authenticationData.userData;
  }

  signInGoogle() {
    return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  signOut() {
    return this.angularFireAuth.auth.signOut();
  }
}

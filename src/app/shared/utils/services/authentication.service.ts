import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _loggedInUser: object;
  private _userDataIsLoaded: boolean;
  private _userDataAnnouncer: Subject<boolean>;

  constructor(private angularFireAuth: AngularFireAuth) {

    this._loggedInUser = null;
    this._userDataIsLoaded = false;
    this.init();
  }

  init() {

    this._userDataAnnouncer = new Subject<boolean>();

    this.angularFireAuth.user.subscribe(result => {

      this._loggedInUser = result;
      this._userDataIsLoaded = true;
      this._userDataAnnouncer.next(!!result);
    }, () => {

      this._loggedInUser = null;
      this._userDataIsLoaded = true;
      this._userDataAnnouncer.next(false);
    });
  }

  get userDataIsLoaded(): boolean {
    return this._userDataIsLoaded;
  }

  get userIsLoggedIn(): boolean {
    return !!this._loggedInUser;
  }

  get userDataAnnouncer(): Subject<boolean> {
    return this._userDataAnnouncer;
  }

  get loggedInUser(): object {
    return this._loggedInUser;
  }

  signInGoogle() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  signOut() {
    this.angularFireAuth.auth.signOut();
  }
}

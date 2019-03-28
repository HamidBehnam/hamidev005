import {AuthenticationStatus} from '../enums/authentication-status.enum';

export interface AuthenticationData {
  authorizationStatus: AuthenticationStatus;
  userData: any;
}

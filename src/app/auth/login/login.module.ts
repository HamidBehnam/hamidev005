import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginRoutingModule} from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginConsoleComponent } from './login-console/login-console.component';
import {NbButtonModule, NbCardModule, NbLayoutModule} from '@nebular/theme';

@NgModule({
  declarations: [LoginComponent, LoginConsoleComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NbLayoutModule,
    NbCardModule,
    NbButtonModule
  ]
})
export class LoginModule { }

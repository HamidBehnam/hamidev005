import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import {NbLayoutModule} from '@nebular/theme';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbLayoutModule,
    SharedModule
  ]
})
export class AuthModule { }

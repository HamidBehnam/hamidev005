import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesRoutingModule} from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {NbActionsModule, NbButtonModule, NbLayoutModule, NbSidebarModule, NbSidebarService, NbUserModule} from '@nebular/theme';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbActionsModule,
    NbUserModule,
    NbButtonModule
  ],
  providers: [
    NbSidebarService
  ]
})
export class PagesModule { }

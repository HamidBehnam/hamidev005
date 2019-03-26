import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectedContentModalComponent } from './protected-content-modal/protected-content-modal.component';
import {NbButtonModule, NbCardModule, NbDialogModule} from '@nebular/theme';
import { LogoInformationDirective } from './utils/directives/logo-information.directive';
import { FullNamePipe } from './utils/pipes/full-name.pipe';

@NgModule({
  declarations: [ProtectedContentModalComponent, LogoInformationDirective, FullNamePipe],
  imports: [
    CommonModule,
    NbDialogModule.forChild(),
    NbCardModule,
    NbButtonModule
  ],
  entryComponents: [
    ProtectedContentModalComponent
  ],
  exports: [
    LogoInformationDirective,
    FullNamePipe
  ]
})
export class SharedModule { }

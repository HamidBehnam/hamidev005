import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectedContentModalComponent } from './protected-content-modal/protected-content-modal.component';
import {NbButtonModule, NbCardModule, NbDialogModule} from '@nebular/theme';

@NgModule({
  declarations: [ProtectedContentModalComponent],
  imports: [
    CommonModule,
    NbDialogModule.forChild(),
    NbCardModule,
    NbButtonModule
  ],
  entryComponents: [
    ProtectedContentModalComponent
  ]
})
export class SharedModule { }

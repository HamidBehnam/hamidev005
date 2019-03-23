import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'app-protected-content-modal',
  templateUrl: './protected-content-modal.component.html',
  styleUrls: ['./protected-content-modal.component.sass']
})
export class ProtectedContentModalComponent implements OnInit {

  constructor(private dialogRef: NbDialogRef<ProtectedContentModalComponent>) { }

  ngOnInit() {
  }

  accept() {
    this.dialogRef.close();
  };
}

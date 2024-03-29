import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
})
export class DialogsComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './../dialog-elements-example-dialog/dialog-elements-example-dialog.component.html',
})
export class DialogElementsExampleDialog {}


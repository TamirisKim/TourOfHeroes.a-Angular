import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class LazyDialogService {
  constructor(private dialog: MatDialog) {}

  async openDialog(dialogName: string): Promise<MatDialogRef<any>> {
    const chunk = await import(
      `../dialogs/${dialogName}/${dialogName}.component`
    );
    const DialogsComponent = Object.values(chunk)[0] as ComponentType<unknown>;
    return this.dialog.open(DialogsComponent);
  }
}

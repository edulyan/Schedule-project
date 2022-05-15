import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  template: ` <h1 mat-dialog-title>Подтвердите ваше действие</h1>
    <div>
      <p>ВЫ действительно хотите удалить ?</p>
    </div>
    <div mat-dialog-actions>
      <button
        mat-raised-button
        type="button"
        color="black-create"
        (click)="submit()"
      >
        Продолжить
      </button>
      <button mat-raised-button mat-dialog-close color="warn">Отменить</button>
    </div>`,
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<void>) {}

  public submit() {
    this.dialogRef.close(true);
  }
}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './delete-customer-confirmation-dialog.component.html',
  styleUrls: ['./delete-customer-confirmation-dialog.component.css']
})
export class DeleteCustomerConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteCustomerConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true); // User confirmed the deletion
  }

  onCancel(): void {
    this.dialogRef.close(false); // User canceled the deletion
  }
}

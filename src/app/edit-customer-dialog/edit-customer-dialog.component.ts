import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer } from '../customers/customer.model';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-customer-dialog.component.html',
  styleUrls: ['./edit-customer-dialog.component.css']
})
export class EditCustomerDialogComponent {
  editedCustomer: Customer; // Holds the edited customer object

  constructor(
    public dialogRef: MatDialogRef<EditCustomerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Customer
  ) {
    // Make a copy of the customer object to avoid modifying the original data directly
    this.editedCustomer = { ...data };
  }

  onSave(): void {
    this.dialogRef.close(this.editedCustomer); // Pass the edited customer object back to the caller
  }

  onCancel(): void {
    this.dialogRef.close(); // Close the dialog without saving
  }
}
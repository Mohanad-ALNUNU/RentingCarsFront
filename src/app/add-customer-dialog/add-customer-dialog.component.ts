import { Component, Inject } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customers/customer.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'add-customer-dialog',
  templateUrl: './add-customer-dialog.component.html',
  styleUrls: ['./add-customer-dialog.component.css']
})
export class CustomerDialogComponent {
  constructor(
    private customerService: CustomerService,
    @Inject(MAT_DIALOG_DATA) public data: Customer,
    public dialogRef: MatDialogRef<CustomerDialogComponent>
  ) {}

  createCustomer(customer: Customer) {
    customer.id = null;
    this.customerService.createCustomer(customer).subscribe(
      (response) => {
        // Handle successful creation of the customer
        console.log('Customer created successfully:', response);
      },
      (error) => {
        // Handle error in creating the customer
        console.error('Failed to create customer:', error);
      }
    );
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}

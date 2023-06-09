import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from './customer.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomerDialogComponent } from '../add-customer-dialog/add-customer-dialog.component';
import { Location } from '@angular/common';
import { DeleteCustomerConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-customer-confirmation-dialog.component';
import { EditCustomerDialogComponent } from '../edit-customer-dialog/edit-customer-dialog.component';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService: CustomerService, private dialog: MatDialog, private location: Location) { }

  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.customerService.getAllCustomers().subscribe(
      (data) => {
        this.customers = data;
      },
      (error) => {
        console.log('Error fetching customers:', error);
      }
    );
  }

  getCustomerImg(customer: Customer): string {
    if (customer.imageURL.length < 5) {
      const nameWithPlus: string = customer.firstName.concat("+", customer.lastName);
      const imageUrl: string = "https://ui-avatars.com/api/?name=".concat(nameWithPlus);
      return imageUrl;
    }
    return customer.imageURL;
  }

  deleteCustomer(id: string | null): void {
    if(id != null){
      console.log(this.customerService.deleteCustomer(id));
      this.location.getState();  
    }
  }

  updateCustomer(id: string | null, customer: Customer): void {
    if(id != null){
      console.log(this.customerService.updateCustomer(id, customer));
      this.location.getState();  
    }
  }

  showAddCustomerDialog(): void {
    const dialogConfig: MatDialogConfig = {
      panelClass: 'custom-dialog-container'
    };
    const dialogRef = this.dialog.open(CustomerDialogComponent, dialogConfig);
  }  

  onEdit(customerId: string | null): void {
    // Call the HTTP GET request to fetch the customer data by ID
    if(customerId)
    this.customerService.getByIdCustomer(customerId).subscribe(
      (customer: Customer) => {
        const dialogRef = this.dialog.open(EditCustomerDialogComponent, {
          data: customer // Pass the customer data to the dialog
        });
  
        dialogRef.afterClosed().subscribe(editedCustomer => {
          if (editedCustomer) {
            // User saved the edited customer
            this.updateCustomer(customerId, editedCustomer);
          }
        });
      },
      error => {
        console.log('Error fetching customer data:', error);
      }
    );
  }
    
  onDelete(customerId: string | null): void {
    const dialogRef = this.dialog.open(DeleteCustomerConfirmationDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // User confirmed deletion
        this.deleteCustomer(customerId);
      }
    });
  }



  
}

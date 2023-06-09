import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from './customer.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomerDialogComponent } from '../add-customer-dialog/add-customer-dialog.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService: CustomerService, private dialog: MatDialog) { }

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

  showAddCustomerDialog(): void {
    const dialogConfig: MatDialogConfig = {
      position: {left: '200px', top: '-500px'},
    };
    
    const dialogRef =   this.dialog.open(CustomerDialogComponent, dialogConfig);

}

}

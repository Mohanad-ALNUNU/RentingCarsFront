import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from './customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{

  customers: Customer[] = [];
  customersImg: String = "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png";

  constructor(private customerService: CustomerService){ }

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
    if (customer.imageURL.length === 0) {
      const nameWithPlus: string = customer.firstName.concat("+", customer.lastName);
      const imageUrl: string = "https://ui-avatars.com/api/?name=".concat(nameWithPlus);
      return imageUrl;
    }
    return customer.imageURL;
  }
  

}

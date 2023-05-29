import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{

  customers: any[] = [];
  customersImg: String = "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png";

  constructor(private customerService: CustomerService){ }

  ngOnInit(): void {
    this.fetchCustomers();  
  }

  fetchCustomers(){
    this.customerService.getAllCustomers().subscribe(
      (data)=> {
        this.customers = data;
      },
      (error) => {
          console.log('Error while fetching Customers: ', error);
      }
    )
  }

}

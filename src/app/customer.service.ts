import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Customer } from './customers/customer.model';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiURL = 'http://127.0.0.1:8081/api/customers';
  private allCustomers = `${this.apiURL}/all`;
  constructor(private http: HttpClient) {}

  getAllCustomers():Observable<any>{
    return this.http.get<any>(this.allCustomers);
  }
  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiURL, customer);
  }
}

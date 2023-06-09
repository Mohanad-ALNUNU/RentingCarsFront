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
  private updateURL = `${this.apiURL}/update`;
  private deleteURL = `${this.apiURL}/delete`;
  private searchURL = `${this.apiURL}/search`;
  private searchByIdURL = `${this.searchURL}/customerID`;
  private searchByNameURL = `${this.searchURL}/customername`;
  private searchByBirthDayURL = `${this.searchURL}/birthDay`;
  private searchByNameAndBirthDayURL = `${this.searchURL}/customernameBirthDay`;
  
  constructor(private http: HttpClient) {}

  getAllCustomers():Observable<any>{
    return this.http.get<any>(this.allCustomers);
  }
  createCustomer(customer: Customer): Observable<string> {
    return this.http.post<string>(this.apiURL, customer);
  }
  updateCustomer(id: string, customer: Customer): void {
    this.http.put(`${this.updateURL}/${id}`, customer).subscribe(
      () => {
        console.log('Updated successful'); // Optional: Log success message
        // You can perform any additional actions after successful deletion here
      },
      (error) => {
        console.log('Update failed', error); // Optional: Log error message
        // You can handle the error case or display an error message here
      }
    );;
  }
deleteCustomer(id: string): void {
  this.http.delete(`${this.deleteURL}/${id}`).subscribe(
    () => {
      console.log('Deletion successful'); // Optional: Log success message
      // You can perform any additional actions after successful deletion here
    },
    (error) => {
      console.log('Deletion failed', error); // Optional: Log error message
      // You can handle the error case or display an error message here
    }
  );
}

  getByIdCustomer(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.searchByIdURL}/${id}`);
  }
  getByCustomerName(name: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.searchByNameURL}/${name}`);
  }
  getByCustomerBirthDay(birthday: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.searchByBirthDayURL}/${birthday}`);
  }
  getByCustomerNameAndBirthDay(name: string, birthday: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.searchByNameAndBirthDayURL}/${name}/${birthday}`);
  }
}

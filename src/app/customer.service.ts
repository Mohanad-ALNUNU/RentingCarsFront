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
  getCustomer():Observable<any>{
    return this.http.get<any>(this.allCustomers);
  }
  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiURL, customer);
  }
  updateCustomer(id: string, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.updateURL}/${id}`, customer);
  }
  deleteCustomer(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.deleteURL}/${id}`);
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

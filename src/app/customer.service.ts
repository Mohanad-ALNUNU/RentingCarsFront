import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
private apiURL = 'http://localhost:8081/api/customers/all';
  constructor(private http: HttpClient) {}

  getAllCustomers():Observable<any>{
    return this.http.get<any>(this.apiURL);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiBaseURL = 'http://127.0.0.1:8082/api';
  private apiVehicleURL = '/vehicles';
  private apiURL = this.apiBaseURL.concat(this.apiVehicleURL);
  constructor(private http: HttpClient) { }

  getAllVehicles(): Observable<Vehicle[]> {
    const url = `${this.apiURL}/all`;
    return this.http.get<Vehicle[]>(url);
  }

  getVehicleById(id: string): Observable<Vehicle> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Vehicle>(url);
  }

  getVehicleByName(name: string): Observable<Vehicle> {
    const url = `${this.apiURL}/search/vehicleName/${name}`;
    return this.http.get<Vehicle>(url);
  }
  getVehicleByModeleDate(modeleDate: string): Observable<Vehicle> {
    const url = `${this.apiURL}/search/vehicleModelDate/${modeleDate}`;
    return this.http.get<Vehicle>(url);
  }
}

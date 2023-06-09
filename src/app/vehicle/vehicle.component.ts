import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from './vehicle.model';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  vehicles: Vehicle[] = [];
  constructor(private vehicleService: VehicleService){ }

  ngOnInit(): void{
    this.fetchVehicles();
  }

  fetchVehicles(): void{
    this.vehicleService.getAllVehicles().subscribe(
      (data) => {
        this.vehicles = data;
      },
      (error) => {
        console.log("error fetchig Vehicles :", error);
      }
    );
  }

  getVehicleImg(vehicle: Vehicle): string {
    if (vehicle.imageURL == null || vehicle.imageURL.length === 0) {
      const imageUrl: string = "https://ui-avatars.com/api/?name=".concat(vehicle.name);
      return imageUrl;
    }
    return vehicle.imageURL;
  }
}

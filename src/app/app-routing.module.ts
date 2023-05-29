import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ContractComponent } from './contract/contract.component';

const routes: Routes = [
  {path: '',redirectTo:'/customers', pathMatch:'full'},
  {path: 'customers', component: CustomersComponent},
  {path: 'vehicle', component: VehicleComponent},
  {path: 'contract', component: ContractComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

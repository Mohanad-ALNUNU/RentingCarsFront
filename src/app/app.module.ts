import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ContractComponent } from './contract/contract.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomerDialogComponent } from './add-customer-dialog/add-customer-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerFormComponent } from './add-customer-dialog/add-customer-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteCustomerConfirmationDialogComponent } from './delete-confirmation-dialog/delete-customer-confirmation-dialog.component';
import { EditCustomerDialogComponent } from './edit-customer-dialog/edit-customer-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    VehicleComponent,
    ContractComponent,
    NavbarComponent,
    CustomerDialogComponent,
    CustomerFormComponent,
    DeleteCustomerConfirmationDialogComponent,
    EditCustomerDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

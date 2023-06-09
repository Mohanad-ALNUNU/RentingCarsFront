import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../customers/customer.model';

@Component({
  selector: 'add-customer-form',
  templateUrl: './add-customer-form.component.html',
})
export class CustomerFormComponent {
  @Output() submitForm = new EventEmitter<Customer>();

  customerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.customerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      customerName: ['', Validators.required],
      imageURL: ['', Validators.required],
      password: ['', Validators.required],
      birthDay: ['', Validators.required],
      paymentMethod: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.customerForm.valid) {
      const customer: Customer = {
        id: "",
        firstName: this.customerForm.value.firstName,
        lastName: this.customerForm.value.lastName,
        customerName: this.customerForm.value.customerName,
        imageURL: this.customerForm.value.imageURL,
        password: this.customerForm.value.password,
        birthDay: this.customerForm.value.birthDay,
        paymentMethod: this.customerForm.value.paymentMethod
      };
      this.submitForm.emit(customer);
    }
  }
  }

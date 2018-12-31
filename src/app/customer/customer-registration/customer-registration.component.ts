import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
  customerForm: FormGroup;
  customer: Customer = new Customer();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      // lastName: { value: 'Dwivedi', disabled: true },
      email: '',
      sendCatelog: true
    });
  }

  reset(): void {
    this.customerForm.setValue({
      firstName: '',
      lastName: '',
      email: '',
      sendCatelog: true
    });
  }

  save(): void {
    console.log("Saving...");
  }

  setTestData(): void {
    this.customerForm.setValue({
      firstName: 'Atul',
      lastName: 'Dwivedi',
      email: 'atul@atuldwivedi.com',
      sendCatelog: false
    });
  }

  patchTestData(): void {
    this.customerForm.patchValue({
      firstName: 'Sachin',
      lastName: 'Tendulkar',
      sendCatelog: false
    });

  }
}

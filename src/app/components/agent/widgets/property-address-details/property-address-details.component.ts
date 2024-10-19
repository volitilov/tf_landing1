import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  location,city
} from '../../../../shared/data/advance-filter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-address-details',
  standalone: true,
  imports:[ReactiveFormsModule,CommonModule],
  templateUrl: './property-address-details.component.html',
  styleUrls: ['./property-address-details.component.scss'],
})
export class PropertyAddressDetailsComponent {

  @Output() activeSteps = new EventEmitter<number>();
  public activeStep: number = 2;
  public validate: boolean = false;
  public location = location;
  public cities = city;

  public myForm = new FormGroup({
    address: new FormControl('', Validators.required),
    pin_code: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{6}$'),
      Validators.minLength(6),
      Validators.maxLength(6),
    ]),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    landmark: new FormControl('', Validators.required),
  });

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }
  next(myForm: FormGroup) {
   if (this.myForm.invalid) {
     this.validate = true;
   } else {
     const number = this.activeStep + 1;
     this.activeSteps.emit(number);
   }
  }

  get address() {
    return this.myForm.get('address');
  }

  get pin_code() {
    return this.myForm.get('pin_code');
  }

  get country() {
    return this.myForm.get('country');
  }

  get city() {
    return this.myForm.get('city');
  }

  get landmark() {
    return this.myForm.get('landmark');
  }
}

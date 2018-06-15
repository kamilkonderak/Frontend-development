import { ServiceService } from "../service.service"
import { Component, OnInit }                  from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/forbidden-name';

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {

  availability = ['Yes', 'No'];

  service = {name: 'Dr.', price: '', isavailable: this.availability[0]};

  serviceForm: FormGroup;

  ngOnInit(): void {
    this.serviceForm = new FormGroup({
      'name': new FormControl(this.service.name, [
        Validators.required,
        Validators.minLength(6),
        forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      'price': new FormControl(this.service.price),
      'isavailable': new FormControl(this.service.isavailable, Validators.required)
    });
  }

  get name() { return this.serviceForm.get('name'); }

  get isavailable() { return this.serviceForm.get('isavailable'); }
}
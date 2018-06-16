import { ServiceService } from "../service.service"
import { Service} from "../service/service"
import { Component, OnInit }                  from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/forbidden-name';


@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {

  services: Service[];
  serviceService = ServiceService;
  
  availability = ['Yes', 'No'];

  service = {name: '', price: '', amount: '', isavailable: this.availability[0]};

  serviceForm: FormGroup;

  ngOnInit(): void {
    this.serviceForm = new FormGroup({
      'name': new FormControl(this.service.name, [
        Validators.required,
        Validators.minLength(6),
        forbiddenNameValidator(/AI/i) // <-- Here's how you pass in the custom validator.
      ]),
      'price': new FormControl(this.service.price, Validators.min(0)),
      'isavailable': new FormControl(this.service.isavailable, Validators.required ),
      'amount': new FormControl(this.service.amount, Validators.min(0))
    //  'amount': new FormControl(this.service.amount, Validators.min(0))
    });
  }

  get name() { return this.serviceForm.get('name'); }
  get price() {return this.serviceForm.get('price');}
  get amount() {return this.serviceForm.get('amount');}
  get isavailable() { return this.serviceForm.get('isavailable'); }
/* 
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.serviceService;
    this.serviceService.addService({ name } as Service)
      .subscribe(service => {
        this.services.push(service);
      });
  } */


}
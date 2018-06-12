import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service';
import { SERVICES } from '../mock-services';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services = SERVICES;
  selectedService: Service;
  constructor() { }

  ngOnInit() {
  }

  onSelect(service: Service): void{
      this.selectedService = service;
  }

  onBuy(service: Service): void{
    this.selectedService.amount = service.amount -1;
}

}

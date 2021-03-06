import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service';
import { SERVICES } from '../mock-services';
import { ServiceService } from "../service.service"
import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services: Service[];
  selectedService: Service;
  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.getServices();
  }

  onSelect(service: Service): void{
      this.selectedService = service;
  }



getServices(): void {
  this.serviceService.getServices()
      .subscribe(services => this.services = services);
}

addService(name: string): void {
  console.log(name)
/*     if (name) {
      let service2 = new Service(name);
      this.services.push(service2);
    }  */
}
}


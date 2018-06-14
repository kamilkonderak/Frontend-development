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


getServices(): void {
  this.serviceService.getServices()
      .subscribe(services => this.services = services);
}

add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.serviceService.addService({ name } as Service)
    .subscribe(hero => {
      this.services.push(hero);
    });
}

delete(service: Service): void {
  this.services = this.services.filter(h => h !== service);
  this.serviceService.deleteService(service).subscribe();
}

}


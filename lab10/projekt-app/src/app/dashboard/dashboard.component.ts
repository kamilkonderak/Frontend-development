import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service';
import { ServiceService } from '../service.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  services: Service[] = [];
 
  constructor(private heroService: ServiceService) { }
 
  ngOnInit() {
    this.getServices();
  }
 
  getServices(): void {
    this.heroService.getServices()
      .subscribe(services => this.services = services)
  }
}
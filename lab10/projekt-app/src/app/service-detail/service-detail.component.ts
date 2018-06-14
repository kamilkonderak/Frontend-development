import { Component, OnInit, Input } from '@angular/core';
import { Service} from '../service/service'
import {ServiceService} from '../service.service'
import {MessageService} from '../message.service'
import {Observable} from 'rxjs';
import { of} from 'rxjs/observable/of';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  @Input() service: Service;

  constructor(
    private route: ActivatedRoute,
    private serviceService: ServiceService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getService();
  }

  getService(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.serviceService.getService(id)
    .subscribe(service => this.service = service);
  }

  goBack(): void {
    this.location.back();
  }

  Buy(service: Service): void{
    this.service.amount = service.amount -1;
}

save(): void {
  this.serviceService.updateService(this.service)
    .subscribe(() => this.goBack());
}

}

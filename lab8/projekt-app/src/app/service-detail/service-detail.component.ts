import { Component, OnInit, Input } from '@angular/core';
import { Service} from '../service/service'
import {MessageService} from '../message.service'
import {Observable} from 'rxjs';
import { of} from 'rxjs/observable/of';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  @Input() service: Service;

  constructor() { }

  ngOnInit() {
  }

  Buy(service: Service): void{
    this.service.amount = service.amount -1;
}
}

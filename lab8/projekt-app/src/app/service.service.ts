import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Service } from "../app/service/service"
import { SERVICES } from "../app/mock-services"
import { MessageService } from './message.service'

@Injectable()

export class ServiceService {

  constructor(private messageService: MessageService) { }

  getServices(): Observable<Service[]> {
    this.messageService.add('Services list was fetched');
    return of (SERVICES);
  }

}

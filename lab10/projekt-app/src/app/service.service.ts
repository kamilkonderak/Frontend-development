import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Service } from "../app/service/service"
import { SERVICES } from "../app/mock-services"
import { MessageService } from './message.service'

@Injectable()

export class ServiceService {

  constructor(private messageService: MessageService) { }

  getService(id: number): Observable<Service> {
    this.messageService.add('Fetched service id=${id}');
    return of (SERVICES.find(service => service.id ===id));
  }

  getServices(): Observable<Service[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(SERVICES);
  }


}

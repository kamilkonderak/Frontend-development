import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Service } from "../app/service/service"
import { SERVICES } from "../app/mock-services"
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class ServiceService {

  constructor(private http: HttpClient,
    private messageService: MessageService) { }
    
    private servicesUrl = 'api/services';  // URL to web api

  getService(id: number): Observable<Service> {
    this.messageService.add(`Fetched service id=${id}`);
    return of (SERVICES.find(service => service.id ===id));
  }

  getServices(): Observable<Service[]> {
    // TODO: send the message _after_ fetching the heroes
    return this.http.get<Service[]>(this.servicesUrl)
  }

  private log(message: string) {
    this.messageService.add('Service: ' + message);
  }

 


}

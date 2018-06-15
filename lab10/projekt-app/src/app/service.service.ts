import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Service } from "../app/service/service"
import { SERVICES } from "../app/mock-services"
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()



export class ServiceService {

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

    private servicesUrl = 'api/services';  // URL to web api


    
  getService(id: number): Observable<Service> {
    const url = `${this.servicesUrl}/${id}`;
    return this.http.get<Service>(url).pipe(
      tap(_ => this.log(`fetched service id=${id}`)),
      catchError(this.handleError<Service>(`getService id=${id}`))
  );
  }

  getServices(): Observable<Service[]> {
    // TODO: send the message _after_ fetching the heroes
    return this.http.get<Service[]>(this.servicesUrl)
    .pipe(
      tap(services => this.log(`fetched services`)),
      catchError(this.handleError('getServices', []))
    );
  }

    /** GET hero by id. Return `undefined` when id not found */
    getHeroNo404<Data>(id: number): Observable<Service> {
      const url = `${this.servicesUrl}/?id=${id}`;
      return this.http.get<Service[]>(url)
        .pipe(
          map(services => services[0]), // returns a {0|1} element array
          tap(h => {
            const outcome = h ? `fetched` : `did not find`;
            this.log(`${outcome} service id=${id}`);
          }),
          catchError(this.handleError<Service>(`getService id=${id}`))
        );
    }

  private log(message: string) {
    this.messageService.add('Service: ' + message);
  }

  updateService (hero: Service): Observable<any> {
    return this.http.put(this.servicesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated service id=${hero.id}`)),
      catchError(this.handleError<any>('updateService'))
    );
  }

  addService (service: Service): Observable<Service> {
    return this.http.post<Service>(this.servicesUrl, service, httpOptions).pipe(
      tap((service: Service) => this.log(`added service w/ id=${service.id}`)),
      catchError(this.handleError<Service>('addService'))
    );
  }

  deleteService (service: Service | number): Observable<Service> {
    const id = typeof service === 'number' ? service : service.id;
    const url = `${this.servicesUrl}/${id}`;
  
    return this.http.delete<Service>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted service id=${id}`)),
      catchError(this.handleError<Service>('deleteService'))
    );
  }

  /* GET heroes whose name contains search term */
searchServices(term: string): Observable<Service[]> {
  if (!term.trim()) {
    return of([]);
  }
  return this.http.get<Service[]>(`${this.servicesUrl}/?name=${term}`).pipe(
    tap(_ => this.log(`found services matching "${term}"`)),
    catchError(this.handleError<Service[]>('searchServices', []))
  );
}


private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
 
/*   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 } */

}


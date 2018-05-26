import { Injectable } from '@angular/core';
import { Person } from '../model/person.model';
@Injectable()
export class PersonService {

  persons : Person[];
  constructor() { 
    this.persons = [new PerformanceResourceTiming('Bolek', 12), new Person('Lolek', 23)];
  }

  getPersons {
    return this.persons;
  }

  addPerson(person: Person)
  {
    this.person.push(person);
  }

}

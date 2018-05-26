import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Person.ComponentComponent } from './person.component.component';

describe('Person.ComponentComponent', () => {
  let component: Person.ComponentComponent;
  let fixture: ComponentFixture<Person.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Person.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Person.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

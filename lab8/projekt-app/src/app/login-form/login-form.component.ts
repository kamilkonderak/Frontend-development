import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import {Service} from '../service'
import { User } from '../user/user';

@Component({
  selector: 'app-login-forms',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  user: User[];
  myForm: FormGroup;
  service: Service[];



  constructor(fb: FormBuilder, private personService: PersonService) {
    this.myForm = fb.group({
      'imie' : ['podaj imie', Validators.compose([Validators.required, this.myImieValidator])],
    });
    this.imie = this.myForm.controls['imie'];

    this.myForm.controls['imie'].valueChanges.subscribe(imie => console.log('imie'))
    this.persons = [new Person('Bolek', 1999), new Person('Lolek', 1998)];
  }

  ngOnInit() {
  }

}
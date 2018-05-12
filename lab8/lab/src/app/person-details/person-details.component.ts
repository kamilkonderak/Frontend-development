import { Component, OnInit, Input } from '@angular/core';
import { Person} from './../model/person';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  @Input() personToShow: string;

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'

@Component({
  selector: 'app-service-search',
  templateUrl: './service-search.component.html',
  styleUrls: ['./service-search.component.css']
})
export class ServiceSearchComponent implements OnInit {

  SearchControl = new FormControl();
  searchService: string[];

  constructor() {
    this.SearchControl.valueChanges.subscribe(
      searchPhrase => {
        this.searchService.push(searchPhrase);
      }
    )
   }

  ngOnInit() {
  }

}

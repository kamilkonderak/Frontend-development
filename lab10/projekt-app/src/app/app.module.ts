import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { MessagesComponent } from './messages/messages.component';
import {ServiceService} from './service.service';
import {MessageService} from './message.service';
import {ServiceSearchComponent} from './service-search/service-search.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { ServiceSearchComponent } from './service-search/service-search.component'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import {HttpClientModule} from '@angular/common/http';
import { ServiceAddComponent } from './service-add/service-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ServiceDetailComponent,
    MessagesComponent,
    ServiceSearchComponent,
    DashboardComponent,
    ServiceAddComponent
    //LoginFormComponent,,
    //ServiceSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
    
  ],
  providers: [ServiceService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }



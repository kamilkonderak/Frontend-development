import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServicesComponent} from './services/services.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import {ServiceDetailComponent} from './service-detail/service-detail.component'
import { MessagesComponent} from './messages/messages.component'
import { ServiceSearchComponent} from './service-search/service-search.component'

const routes: Routes = [
  { path: 'services', component: ServicesComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ServiceDetailComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'search', component: ServiceSearchComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  
})


export class AppRoutingModule {
  
}


import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServicesComponent} from './services/services.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import {ServiceDetailComponent} from './service-detail/service-detail.component'
const routes: Routes = [
  { path: 'services', component: ServicesComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ServiceDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  
})


export class AppRoutingModule {
  
}


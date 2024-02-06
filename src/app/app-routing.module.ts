import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './features/components/home/home.component'
import { AppointmentSummaryInterpreterComponent } from './features/components/appointment-summary-interpreter/appointment-summary-interpreter.component'
import { AppointmentSummaryDriverComponent } from './features/components/appointment-summary-driver/appointment-summary-driver.component'
import { ErrorComponent } from './core/components/error/error.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'interpreter', component: AppointmentSummaryInterpreterComponent},
  { path: 'driver', component: AppointmentSummaryDriverComponent},
  { path: 'error', component: ErrorComponent},
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

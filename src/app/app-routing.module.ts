import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppointmentSummaryInterpreterComponent } from './features/components/appointment-summary-interpreter/appointment-summary-interpreter.component'
import { AppointmentSummaryDriverComponent } from './features/components/appointment-summary-driver/appointment-summary-driver.component'
import { ErrorComponent } from './core/components/error/error.component';
import { AuthComponent } from './core/components/auth/auth.component';
import { AppointmentsummaryComponent } from './features/components/appointmentsummary/appointmentsummary.component';
import { AuthGuard } from './core/guards/auth/auth.guard';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'auth', component: AuthComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'summary', component: AppointmentsummaryComponent },
      { path: 'interpreter', component: AppointmentSummaryInterpreterComponent },
      { path: 'driver', component: AppointmentSummaryDriverComponent },
      { path: 'error', component: ErrorComponent },    
    ]
  },
  { path: '**', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentSummaryInterpreterComponent } from './components/appointment-summary-interpreter/appointment-summary-interpreter.component';
import { AppointmentSummaryDriverComponent } from './components/appointment-summary-driver/appointment-summary-driver.component';
import { AppointmentsummaryComponent } from './components/appointmentsummary/appointmentsummary.component';

@NgModule({
  declarations: [
    AppointmentSummaryInterpreterComponent,
    AppointmentSummaryDriverComponent,
    AppointmentsummaryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }

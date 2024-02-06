import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentSummaryInterpreterComponent } from './components/appointment-summary-interpreter/appointment-summary-interpreter.component';
import { HomeComponent } from './components/home/home.component';
import { AppointmentSummaryDriverComponent } from './components/appointment-summary-driver/appointment-summary-driver.component';

@NgModule({
  declarations: [
    AppointmentSummaryInterpreterComponent,
    AppointmentSummaryDriverComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }

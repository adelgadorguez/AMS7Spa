import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSummaryInterpreterComponent } from './appointment-summary-interpreter.component';

describe('AppointmentSummaryInterpreterComponent', () => {
  let component: AppointmentSummaryInterpreterComponent;
  let fixture: ComponentFixture<AppointmentSummaryInterpreterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentSummaryInterpreterComponent]
    });
    fixture = TestBed.createComponent(AppointmentSummaryInterpreterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

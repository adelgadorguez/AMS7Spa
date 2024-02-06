import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSummaryDriverComponent } from './appointment-summary-driver.component';

describe('AppointmentSummaryDriverComponent', () => {
  let component: AppointmentSummaryDriverComponent;
  let fixture: ComponentFixture<AppointmentSummaryDriverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentSummaryDriverComponent]
    });
    fixture = TestBed.createComponent(AppointmentSummaryDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

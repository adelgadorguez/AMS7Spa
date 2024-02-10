import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsummaryComponent } from './appointmentsummary.component';

describe('AppointmentsummaryComponent', () => {
  let component: AppointmentsummaryComponent;
  let fixture: ComponentFixture<AppointmentsummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentsummaryComponent]
    });
    fixture = TestBed.createComponent(AppointmentsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

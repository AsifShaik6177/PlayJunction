import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachBookingComponent } from './coach-booking.component';

describe('CoachBookingComponent', () => {
  let component: CoachBookingComponent;
  let fixture: ComponentFixture<CoachBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

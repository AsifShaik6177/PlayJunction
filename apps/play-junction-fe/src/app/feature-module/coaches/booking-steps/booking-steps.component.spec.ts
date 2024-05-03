import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStepsComponent } from './booking-steps.component';

describe('BookingStepsComponent', () => {
  let component: BookingStepsComponent;
  let fixture: ComponentFixture<BookingStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

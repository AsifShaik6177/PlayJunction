import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachPaymentComponent } from './coach-payment.component';

describe('CoachPaymentComponent', () => {
  let component: CoachPaymentComponent;
  let fixture: ComponentFixture<CoachPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonPaymentComponent } from './lesson-payment.component';

describe('LessonPaymentComponent', () => {
  let component: LessonPaymentComponent;
  let fixture: ComponentFixture<LessonPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

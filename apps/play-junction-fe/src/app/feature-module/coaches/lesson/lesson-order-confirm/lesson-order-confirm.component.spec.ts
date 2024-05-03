import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonOrderConfirmComponent } from './lesson-order-confirm.component';

describe('LessonOrderConfirmComponent', () => {
  let component: LessonOrderConfirmComponent;
  let fixture: ComponentFixture<LessonOrderConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonOrderConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonOrderConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

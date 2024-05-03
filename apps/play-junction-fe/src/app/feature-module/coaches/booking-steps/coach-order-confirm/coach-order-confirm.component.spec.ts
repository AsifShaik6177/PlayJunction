import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachOrderConfirmComponent } from './coach-order-confirm.component';

describe('CoachOrderConfirmComponent', () => {
  let component: CoachOrderConfirmComponent;
  let fixture: ComponentFixture<CoachOrderConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachOrderConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachOrderConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

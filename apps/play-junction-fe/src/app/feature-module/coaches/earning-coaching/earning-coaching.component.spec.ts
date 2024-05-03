import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningCoachingComponent } from './earning-coaching.component';

describe('EarningCoachingComponent', () => {
  let component: EarningCoachingComponent;
  let fixture: ComponentFixture<EarningCoachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarningCoachingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarningCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

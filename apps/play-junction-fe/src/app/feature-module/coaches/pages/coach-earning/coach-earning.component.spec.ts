import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachEarningComponent } from './coach-earning.component';

describe('CoachEarningComponent', () => {
  let component: CoachEarningComponent;
  let fixture: ComponentFixture<CoachEarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachEarningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachEarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

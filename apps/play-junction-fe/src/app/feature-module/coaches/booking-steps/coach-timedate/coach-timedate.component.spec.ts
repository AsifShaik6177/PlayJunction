import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachTimedateComponent } from './coach-timedate.component';

describe('CoachTimedateComponent', () => {
  let component: CoachTimedateComponent;
  let fixture: ComponentFixture<CoachTimedateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachTimedateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachTimedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachPersonalinfoComponent } from './coach-personalinfo.component';

describe('CoachPersonalinfoComponent', () => {
  let component: CoachPersonalinfoComponent;
  let fixture: ComponentFixture<CoachPersonalinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachPersonalinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachPersonalinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

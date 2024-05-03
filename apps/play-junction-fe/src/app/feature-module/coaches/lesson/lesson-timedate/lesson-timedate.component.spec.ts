import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTimedateComponent } from './lesson-timedate.component';

describe('LessonTimedateComponent', () => {
  let component: LessonTimedateComponent;
  let fixture: ComponentFixture<LessonTimedateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonTimedateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonTimedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

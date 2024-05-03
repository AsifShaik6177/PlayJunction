import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTypeComponent } from './lesson-type.component';

describe('LessonTypeComponent', () => {
  let component: LessonTypeComponent;
  let fixture: ComponentFixture<LessonTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

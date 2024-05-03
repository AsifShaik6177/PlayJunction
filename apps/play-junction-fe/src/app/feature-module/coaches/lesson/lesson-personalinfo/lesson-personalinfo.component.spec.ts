import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonPersonalinfoComponent } from './lesson-personalinfo.component';

describe('LessonPersonalinfoComponent', () => {
  let component: LessonPersonalinfoComponent;
  let fixture: ComponentFixture<LessonPersonalinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonPersonalinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonPersonalinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

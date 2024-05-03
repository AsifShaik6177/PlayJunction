import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingLessonComponent } from './setting-lesson.component';

describe('SettingLessonComponent', () => {
  let component: SettingLessonComponent;
  let fixture: ComponentFixture<SettingLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingLessonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

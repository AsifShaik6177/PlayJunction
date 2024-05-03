import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingAvailabilityComponent } from './setting-availability.component';

describe('SettingAvailabilityComponent', () => {
  let component: SettingAvailabilityComponent;
  let fixture: ComponentFixture<SettingAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingAvailabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

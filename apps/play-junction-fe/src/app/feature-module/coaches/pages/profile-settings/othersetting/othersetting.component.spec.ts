import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersettingComponent } from './othersetting.component';

describe('OthersettingComponent', () => {
  let component: OthersettingComponent;
  let fixture: ComponentFixture<OthersettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthersettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthersettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CagePersonalInfoComponent } from './cage-personal-info.component';

describe('CagePersonalInfoComponent', () => {
  let component: CagePersonalInfoComponent;
  let fixture: ComponentFixture<CagePersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CagePersonalInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CagePersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CageComponent } from './cage.component';

describe('CageComponent', () => {
  let component: CageComponent;
  let fixture: ComponentFixture<CageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

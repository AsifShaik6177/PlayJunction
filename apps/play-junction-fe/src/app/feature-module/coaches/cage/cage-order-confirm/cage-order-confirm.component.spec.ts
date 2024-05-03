import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CageOrderConfirmComponent } from './cage-order-confirm.component';

describe('CageOrderConfirmComponent', () => {
  let component: CageOrderConfirmComponent;
  let fixture: ComponentFixture<CageOrderConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CageOrderConfirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CageOrderConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

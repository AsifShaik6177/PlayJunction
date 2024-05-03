import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CageCheckoutComponent } from './cage-checkout.component';

describe('CageCheckoutComponent', () => {
  let component: CageCheckoutComponent;
  let fixture: ComponentFixture<CageCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CageCheckoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CageCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

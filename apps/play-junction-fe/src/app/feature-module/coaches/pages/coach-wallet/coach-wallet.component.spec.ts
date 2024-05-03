import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachWalletComponent } from './coach-wallet.component';

describe('CoachWalletComponent', () => {
  let component: CoachWalletComponent;
  let fixture: ComponentFixture<CoachWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachWalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

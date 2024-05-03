import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtInactiveComponent } from './court-inactive.component';

describe('CourtInactiveComponent', () => {
  let component: CourtInactiveComponent;
  let fixture: ComponentFixture<CourtInactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtInactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourtInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

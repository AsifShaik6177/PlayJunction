import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtActiveComponent } from './court-active.component';

describe('CourtActiveComponent', () => {
  let component: CourtActiveComponent;
  let fixture: ComponentFixture<CourtActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtActiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourtActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesGridComponent } from './coaches-grid.component';

describe('CoachesGridComponent', () => {
  let component: CoachesGridComponent;
  let fixture: ComponentFixture<CoachesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachesGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

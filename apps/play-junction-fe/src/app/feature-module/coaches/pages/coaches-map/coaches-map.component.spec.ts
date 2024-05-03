import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesMapComponent } from './coaches-map.component';

describe('CoachesMapComponent', () => {
  let component: CoachesMapComponent;
  let fixture: ComponentFixture<CoachesMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachesMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

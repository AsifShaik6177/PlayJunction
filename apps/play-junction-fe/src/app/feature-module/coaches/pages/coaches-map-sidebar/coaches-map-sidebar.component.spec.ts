import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesMapSidebarComponent } from './coaches-map-sidebar.component';

describe('CoachesMapSidebarComponent', () => {
  let component: CoachesMapSidebarComponent;
  let fixture: ComponentFixture<CoachesMapSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachesMapSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachesMapSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

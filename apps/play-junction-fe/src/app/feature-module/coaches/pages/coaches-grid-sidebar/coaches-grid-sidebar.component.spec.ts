import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesGridSidebarComponent } from './coaches-grid-sidebar.component';

describe('CoachesGridSidebarComponent', () => {
  let component: CoachesGridSidebarComponent;
  let fixture: ComponentFixture<CoachesGridSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachesGridSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachesGridSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

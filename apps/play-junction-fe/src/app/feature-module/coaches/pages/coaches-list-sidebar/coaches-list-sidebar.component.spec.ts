import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesListSidebarComponent } from './coaches-list-sidebar.component';

describe('CoachesListSidebarComponent', () => {
  let component: CoachesListSidebarComponent;
  let fixture: ComponentFixture<CoachesListSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachesListSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachesListSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

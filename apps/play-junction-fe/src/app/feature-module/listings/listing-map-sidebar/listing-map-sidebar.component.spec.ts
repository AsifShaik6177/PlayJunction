import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingMapSidebarComponent } from './listing-map-sidebar.component';

describe('ListingMapSidebarComponent', () => {
  let component: ListingMapSidebarComponent;
  let fixture: ComponentFixture<ListingMapSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingMapSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingMapSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

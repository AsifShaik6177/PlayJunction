import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsSidebarLeftComponent } from './blog-details-sidebar-left.component';

describe('BlogDetailsSidebarLeftComponent', () => {
  let component: BlogDetailsSidebarLeftComponent;
  let fixture: ComponentFixture<BlogDetailsSidebarLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDetailsSidebarLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetailsSidebarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

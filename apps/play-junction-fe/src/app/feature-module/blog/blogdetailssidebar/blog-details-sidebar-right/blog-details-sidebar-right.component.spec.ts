import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsSidebarRightComponent } from './blog-details-sidebar-right.component';

describe('BlogDetailsSidebarRightComponent', () => {
  let component: BlogDetailsSidebarRightComponent;
  let fixture: ComponentFixture<BlogDetailsSidebarRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDetailsSidebarRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetailsSidebarRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

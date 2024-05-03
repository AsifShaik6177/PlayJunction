import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListSidebarRightComponent } from './blog-list-sidebar-right.component';

describe('BlogListSidebarRightComponent', () => {
  let component: BlogListSidebarRightComponent;
  let fixture: ComponentFixture<BlogListSidebarRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogListSidebarRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogListSidebarRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

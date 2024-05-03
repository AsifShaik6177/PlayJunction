import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListSidebarLeftComponent } from './blog-list-sidebar-left.component';

describe('BlogListSidebarLeftComponent', () => {
  let component: BlogListSidebarLeftComponent;
  let fixture: ComponentFixture<BlogListSidebarLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogListSidebarLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogListSidebarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

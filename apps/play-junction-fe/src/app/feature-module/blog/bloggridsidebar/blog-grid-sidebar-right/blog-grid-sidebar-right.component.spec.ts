import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGridSidebarRightComponent } from './blog-grid-sidebar-right.component';

describe('BlogGridSidebarRightComponent', () => {
  let component: BlogGridSidebarRightComponent;
  let fixture: ComponentFixture<BlogGridSidebarRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogGridSidebarRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogGridSidebarRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

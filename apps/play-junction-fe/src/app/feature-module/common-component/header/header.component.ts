import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonService, DataService, SidebarService } from '../../../core/core.index';
import { routes } from '../../../core/helpers/routes';
import { sideBar } from '../../../shared/model/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  public routes = routes;
  @ViewChild('stickyMenu')
  menuElement!: ElementRef;
  headerpage = false;
  sticky = false;
  elementPosition!: number;
  public headerClass = true;
  base = '';
  page = '';
  last = '';
  headerMenuactive = '';

  public white_bg = false;

  sidebar: sideBar[];
  constructor(
    private common: CommonService,
    private data: DataService,
    private sidebarService: SidebarService
  ){
    this.common.base.subscribe((res: string) => {
      this.base = res;
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
    });
    this.sidebar = this.data.sideBar;
  }
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.elementPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
    if (windowScroll == 0) {
      this.white_bg = false;
    } else {
      this.white_bg = true;
    }
  }

  public toggleSidebar(): void {
    this.sidebarService.openSidebar();
  }
  public hideSidebar(): void {
    this.sidebarService.closeSidebar();
  }

  get isLoggedIn(){
    return Boolean(localStorage.getItem('authenticated')) ?? false
  }

  get firstName(){
    var user = JSON.parse(localStorage.getItem('userData')??'{}');
    return user?.name?.split(' ')[0];
  }


}

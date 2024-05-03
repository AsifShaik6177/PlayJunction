import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {
  DataService,
  apiResultFormat,
  pageSelection,
  routes,
} from '../../../../core/core.index';
import { coachRequest } from '../../../../shared/model/page.model';
import {
  PaginationService,
  tablePageSize,
} from '../../../../shared/shared.index';
interface data {
  value: string;
}
@Component({
  selector: 'app-coach-request',
  templateUrl: './coach-request.component.html',
  styleUrls: ['./coach-request.component.scss'],
})
export class CoachRequestComponent {
  public showpopup = false;
  public showrejectedpopup = false;
  public routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';
  public tableData: Array<coachRequest> = [];
  public tableData2: Array<coachRequest> = [];
  dataSource!: MatTableDataSource<coachRequest>;
  public showFilter = false;
  public searchDataValue = '';
  public lastIndex = 0;
  public pageSize = 10;
  public totalData = 0;
  public skip = 0;
  public limit: number = this.pageSize;
  public pageIndex = 0;
  public serialNumberArray: Array<number> = [];
  public currentPage = 1;
  public pageNumberArray: Array<number> = [];
  public pageSelection: Array<pageSelection> = [];
  public totalPages = 0;

  selectedList1: data[] = [{ value: 'This Week' }, { value: 'One Day' }];
  selectedList2: data[] = [{ value: 'Relevance' }, { value: 'Price' }];

  constructor(
    public data: DataService,
    private pagination: PaginationService,
    private router: Router
  ) {
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.coachRequest) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }

  public sortData(sort: Sort) {
    const data = this.tableData.slice();

    if (!sort.active || sort.direction === '') {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = (a as never)[sort.active];
        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public showSuccessPopup() {
    this.showpopup = true;
  }

  public closeSuccessPopup() {
    this.showpopup = false;
  }

  public showRejectedDialog() {
    this.showrejectedpopup = true;
  }

  private getTableData(pageOption: pageSelection): void {
    this.data.getCoachRequest().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: coachRequest, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.id = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<coachRequest>(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray,
      });
    });
  }
  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }

  public redirectHome(): void{
    window.location.href = window.location.origin;
  }
}

import { Component } from '@angular/core';
import { DataService, apiResultFormat, pageSelection, routes } from '../../../../../core/core.index';
import { MatTableDataSource } from '@angular/material/table';
import { Sort } from '@angular/material/sort';
import { coachBooking } from '../../../../../shared/model/page.model';
import { PaginationService, tablePageSize } from '../../../../../shared/shared.index';
import { Router } from '@angular/router';

interface data {
  value: string;
}
@Component({
  selector: 'app-coach-booking',
  templateUrl: './coach-booking.component.html',
  styleUrls: ['./coach-booking.component.scss']
})
export class CoachBookingComponent {
  public routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';

  // pagination variables
  public tableData: Array<coachBooking> = [];
  public pageSize = 10;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  dataSource!: MatTableDataSource<coachBooking>;
  public searchDataValue = '';

  selectedList1: data[] = [{ value: 'This Week' }, { value: 'One Day' }];
  selectedList2: data[] = [{ value: 'Relevance' }, { value: 'Price' }];
  constructor(
    public data: DataService,
    private pagination: PaginationService,
    private router: Router
  ) {
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.coachBooking) {
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
  private getTableData(pageOption: pageSelection): void {
    this.data.getCoachBooking().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: coachBooking, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.id = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<coachBooking>(this.tableData);
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

}

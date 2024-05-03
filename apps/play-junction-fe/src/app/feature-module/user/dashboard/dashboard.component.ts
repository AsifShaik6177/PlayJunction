import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService, coaches, routes, userDashboard } from '../../../core/core.index';
import { PaginationService,tablePageSize } from '../../../shared/shared.index';
import { apiResultFormat,pageSelection} from '../../../core/core.index';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userDashboard: Array<coaches> = [];
  initChecked = false;
  public tableData: Array<userDashboard> = [];
  public routes = routes;
  // pagination variables
  public pageSize = 10;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  dataSource!: MatTableDataSource<userDashboard>;
  public searchDataValue = '';
  //** / pagination variables
  constructor(private data : DataService, private pagination : PaginationService) {
    this.userDashboard = this.data.userDashboard
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      this.getTableData({ skip: res.skip, limit: res.limit });
      this.pageSize = res.pageSize;
    });
  }
  private getTableData(pageOption: pageSelection): void {
    this.data.getuserDashboard().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: userDashboard, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.id = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<userDashboard>(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray,
      });
    });
  }
}

import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService, apiResultFormat, pageSelection, routes } from '../../../../core/core.index';
import { coachWallet } from '../../../../shared/model/page.model';
import { PaginationService, tablePageSize } from '../../../../shared/shared.index';
interface data {
  value: string;
}
@Component({
  selector: 'app-coach-wallet',
  templateUrl: './coach-wallet.component.html',
  styleUrls: ['./coach-wallet.component.scss']
})
export class CoachWalletComponent {
  public walletBalance = this.getWalletBalancefromLocalStorage();
  public routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';

  public tableData: Array<coachWallet> = [];
  dataSource!: MatTableDataSource<coachWallet>;
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


  selectedList1: data[] = [
    {value: 'This Week'},
    {value: 'One Day'}
  ];
  selectedList2: data[] = [
    {value: 'All Transactions'},
    {value: 'One Month'},
    {value: 'Two Month'}
  ];

  constructor(
    public data: DataService,
    private pagination: PaginationService,
    private router: Router
  ) {
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.coachWallet) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }

  public setWalletToLocalStorage(balance: number): void {
    localStorage.setItem('walletBal',balance.toString());
  }

  public getWalletBalancefromLocalStorage():number{
    return parseInt(localStorage.getItem("walletBal") ?? '300')
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

  public handleAddMoney() :void{
    const ele = document.getElementById('Amount');
    if(!ele) return;
    const amount = (ele as HTMLInputElement).value ;
    this.walletBalance += parseInt(amount);
    this.setWalletToLocalStorage(this.walletBalance);
    const modelelement = document.getElementById("wallet-modal-close");
    modelelement?.click()
  }
  private getTableData(pageOption: pageSelection): void {
    this.data.getCoachWallet().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: coachWallet, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.id = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<coachWallet>(this.tableData);
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

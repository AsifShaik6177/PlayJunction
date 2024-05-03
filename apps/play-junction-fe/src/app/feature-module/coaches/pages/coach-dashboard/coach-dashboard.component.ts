import { Component, ViewChild } from '@angular/core';
import { routes } from '../../../../core/core.index';
import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
} from 'ng-apexcharts';
export type ChartOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  series: ApexNonAxisChartSeries | any;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chart: ApexChart | any;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  labels: string[] | any;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plotOptions: ApexPlotOptions | any;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colors: any;
};
interface data {
  value: string;
}
@Component({
  selector: 'app-coach-dashboard',
  templateUrl: './coach-dashboard.component.html',
  styleUrls: ['./coach-dashboard.component.scss'],
})
export class CoachDashboardComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';
  
  constructor() {
    this.chartOptions = {
      chart: {
        height: 250,
        type: 'radialBar',
        toolbar: {
          show: false,
        },
      },
      colors: ['#AAF40C', '#097E52'],
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '14px',
            },
            value: {
              fontSize: '20px',
            },
            total: {
              show: true,
              label: 'Total Earnings',
              formatter: function () {
                return 4050;
              },
            },
          },
        },
      },
      series: [44, 55],
      labels: ['Cages', 'Coaching'],
    };
  }

  selectedList1: data[] = [{ value: 'This Week' }, { value: 'One Day' }];
  selectedList2: data[] = [{ value: 'This Week' }, { value: 'One Day' }];
}

import { Component, Input, OnInit } from '@angular/core';

import { GetAcceptedOrderOfMerchantByMonthResponseData } from '../../../dashboard/dashboard.interface';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-bar-line-chart',
  templateUrl: './bar-line-chart.component.html',
  styleUrls: ['./bar-line-chart.component.scss'],
})
export class BarLineChartComponent implements OnInit {
  @Input() acceptedChartData: GetAcceptedOrderOfMerchantByMonthResponseData;
  @Input() rejectedChartData: GetAcceptedOrderOfMerchantByMonthResponseData;
  @Input() canceledChartData: GetAcceptedOrderOfMerchantByMonthResponseData;
  @Input() unpaidChartData: GetAcceptedOrderOfMerchantByMonthResponseData;
  @Input() deliveredChartData: GetAcceptedOrderOfMerchantByMonthResponseData;

  private acceptedChartBarObj: Chart;
  private rejectedChartBarObj: Chart;
  private canceledChartBarObj: Chart;
  private unpaidChartBarObj: Chart;
  private deliveredChartBarObj: Chart;

  private acceptedChartBarEle: any;
  private rejectedChartBarEle: any;
  private canceledChartBarEle: any;
  private unpaidChartBarEle: any;
  private deliveredChartBarEle: any;

  constructor() {}

  ngOnInit(): void {
    this.acceptedChartBarEle = document.getElementById('accepted-chart-bar');
    this.rejectedChartBarEle = document.getElementById('rejected-chart-bar');
    this.canceledChartBarEle = document.getElementById('canceled-chart-bar');
    this.unpaidChartBarEle = document.getElementById('unpaid-chart-bar');
    this.deliveredChartBarEle = document.getElementById('delivered-chart-bar');

    this.acceptedChartBarObj = new Chart(this.acceptedChartBarEle, {
      type: 'line',
      data: {
        labels: this.acceptedChartData.barLabels,
        datasets: [
          {
            label: this.acceptedChartData.label,
            data: this.acceptedChartData.data,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            // borderWidth: 1,
            tension: 0.1,
          },
        ],
      },
      // options: {
      //   scales: {
      //     y: {
      //       beginAtZero: true,
      //     },
      //   },
      // },
    });
    this.rejectedChartBarObj = new Chart(this.rejectedChartBarEle, {
      type: 'line',
      data: {
        labels: this.rejectedChartData.barLabels,
        datasets: [
          {
            label: this.rejectedChartData.label,
            data: this.rejectedChartData.data,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            // borderWidth: 1,
            tension: 0.1,
          },
        ],
      },
      // options: {
      //   scales: {
      //     y: {
      //       beginAtZero: true,
      //     },
      //   },
      // },
    });
    this.canceledChartBarObj = new Chart(this.canceledChartBarEle, {
      type: 'line',
      data: {
        labels: this.canceledChartData.barLabels,
        datasets: [
          {
            label: this.canceledChartData.label,
            data: this.canceledChartData.data,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            // borderWidth: 1,
            tension: 0.1,
          },
        ],
      },
      // options: {
      //   scales: {
      //     y: {
      //       beginAtZero: true,
      //     },
      //   },
      // },
    });
    this.unpaidChartBarObj = new Chart(this.unpaidChartBarEle, {
      type: 'line',
      data: {
        labels: this.unpaidChartData.barLabels,
        datasets: [
          {
            label: this.unpaidChartData.label,
            data: this.unpaidChartData.data,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            // borderWidth: 1,
            tension: 0.1,
          },
        ],
      },
      // options: {
      //   scales: {
      //     y: {
      //       beginAtZero: true,
      //     },
      //   },
      // },
    });
    this.deliveredChartBarObj = new Chart(this.deliveredChartBarEle, {
      type: 'line',
      data: {
        labels: this.deliveredChartData.barLabels,
        datasets: [
          {
            label: this.deliveredChartData.label,
            data: this.deliveredChartData.data,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            // borderWidth: 1,
            tension: 0.1,
          },
        ],
      },
      // options: {
      //   scales: {
      //     y: {
      //       beginAtZero: true,
      //     },
      //   },
      // },
    });
  }
}

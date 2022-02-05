import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { SubSink } from 'subsink';
import { GetAcceptedOrderOfMerchantByMonthResponseData } from '../dashboard.interface';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private subs = new SubSink();

  acceptedChartData: GetAcceptedOrderOfMerchantByMonthResponseData;
  rejectedChartData: GetAcceptedOrderOfMerchantByMonthResponseData;
  canceledChartData: GetAcceptedOrderOfMerchantByMonthResponseData;
  unpaidChartData: GetAcceptedOrderOfMerchantByMonthResponseData;
  deliveredChartData: GetAcceptedOrderOfMerchantByMonthResponseData;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.subs.sink = forkJoin([
      this.dashboardService.getAcceptedOrderOfMerchantByMonth(),
      this.dashboardService.getRejectedOrderOfMerchantByMonth(),
      this.dashboardService.getCanceledOrderOfMerchantByMonth(),
      this.dashboardService.getUnpaidOrderOfMerchantByMonth(),
      this.dashboardService.getDeliveredOrderOfMerchantByMonth(),
    ]).subscribe((datas) => {
      this.acceptedChartData = datas[0];
      this.rejectedChartData = datas[1];
      this.canceledChartData = datas[2];
      this.unpaidChartData = datas[3];
      this.deliveredChartData = datas[4];
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

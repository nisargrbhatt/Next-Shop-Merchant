import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, EMPTY, Subject } from 'rxjs';
import { distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { ConfirmComponent } from 'src/app/shared/dialog/confirm/confirm.component';
import { SubSink } from 'subsink';
import {
  GetAllMerchantDecisionPendingOrderResponseData,
  GetAllMerchantDecisionPendingOrderResponseDataRow,
  OrderDecisionByMerchantData,
} from '../order.interface';

import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit, OnDestroy {
  private subs = new SubSink();

  currentPage = new BehaviorSubject<number>(1);
  currentPage$ = this.currentPage.asObservable();
  pageSize = 10;

  filterCtr = new FormControl('Pending', {});
  filterCtr$ = this.filterCtr.valueChanges;

  refresh = new Subject();
  refresh$ = this.refresh.asObservable();

  filterValues = ['Pending', 'Accepted', 'Rejected'];

  ordersData: GetAllMerchantDecisionPendingOrderResponseData;

  totalOrders = 0;

  showOrderDetails = false;
  selectedOrder: GetAllMerchantDecisionPendingOrderResponseDataRow;

  mybreakpoint: string;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private snackbarService: MatSnackBar,
    private dialogService: MatDialog,
  ) {}

  ngOnInit(): void {
    this.mybreakpoint = window.innerWidth <= 1000 ? '400px' : '700px';

    this.subs.sink = this.currentPage$
      .pipe(
        switchMap((currentPage: number) => {
          if (this.filterCtr.value === 'Pending') {
            return this.orderService.getAllMerchantDecisionPendingOrder(
              currentPage,
              this.pageSize,
            );
          } else if (this.filterCtr.value === 'Accepted') {
            return this.orderService.getAllMerchantDecisionAcceptedOrder(
              currentPage,
              this.pageSize,
            );
          } else if (this.filterCtr.value === 'Rejected') {
            return this.orderService.getAllMerchantDecisionRejectedOrder(
              currentPage,
              this.pageSize,
            );
          } else {
            return EMPTY;
          }
        }),
      )
      .subscribe((data) => {
        this.ordersData = data;
        this.totalOrders = data?.count;
      });

    this.subs.sink = this.filterCtr$
      .pipe(distinctUntilChanged())
      .subscribe((selectedFilter) => {
        this.currentPage.next(1);
      });

    this.subs.sink = this.refresh$.subscribe((data) => {
      this.currentPage.next(1);
    });
  }

  onOrderSelect(orderId: string): void {
    this.showOrderDetails = true;

    const index = this.ordersData.rows.findIndex((data) => data.id === orderId);

    this.selectedOrder = this.ordersData.rows[index];
  }

  onCloseOrderDetails(): void {
    this.showOrderDetails = false;
  }

  refreshOrders(): void {
    this.refresh.next(1);
  }

  async acceptOrder(): Promise<void> {
    const confirmDialogRef = this.dialogService.open(ConfirmComponent, {
      autoFocus: true,
      hasBackdrop: true,
    });
    const confirmDialogRes: boolean = await confirmDialogRef
      .afterClosed()
      .toPromise();

    if (!confirmDialogRes) {
      return;
    }

    const orderDecisionByMerchantData: OrderDecisionByMerchantData = {
      orderId: this.selectedOrder.id,
      decision: true,
    };

    this.orderService
      .orderDecisionByMerchant(orderDecisionByMerchantData)
      .subscribe((response) => {
        this.snackbarService.open(response.message, 'Ok', {
          duration: 2 * 1000,
        });

        this.refreshOrders();
      });
  }

  async declineOrder(): Promise<void> {
    const confirmDialogRef = this.dialogService.open(ConfirmComponent, {
      autoFocus: true,
      hasBackdrop: true,
    });
    const confirmDialogRes: boolean = await confirmDialogRef
      .afterClosed()
      .toPromise();

    if (!confirmDialogRes) {
      return;
    }

    const orderDecisionByMerchantData: OrderDecisionByMerchantData = {
      orderId: this.selectedOrder.id,
      decision: false,
    };

    this.orderService
      .orderDecisionByMerchant(orderDecisionByMerchantData)
      .subscribe((response) => {
        this.snackbarService.open(response.message, 'Ok', {
          duration: 2 * 1000,
        });

        this.refreshOrders();
      });
  }

  handleSize(event: any): void {
    this.mybreakpoint = event.target.innerWidth <= 1000 ? '450px' : '300px';
  }

  onPageChange(pageEvent: PageEvent): void {
    this.currentPage.next(pageEvent.pageIndex + 1);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

import { PageEvent } from '@angular/material/paginator';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';
import { SubSink } from 'subsink';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PriceService } from '../price.service';
import { GetPricesByMerchantIdResponseData } from '../price.interface';

@Component({
  selector: 'app-prices-list',
  templateUrl: './prices-list.component.html',
  styleUrls: ['./prices-list.component.scss'],
})
export class PricesListComponent implements OnInit, OnDestroy {
  private subs = new SubSink();

  currentPage = new BehaviorSubject<number>(1);
  currentPage$ = this.currentPage.asObservable();

  pageSize = 10;

  refresh = new Subject();
  refresh$ = this.refresh.asObservable();

  totalPrices = 0;
  pricesData: GetPricesByMerchantIdResponseData;

  mybreakpoint: number;

  constructor(
    private router: Router,
    private dialogService: MatDialog,
    private priceService: PriceService,
  ) {}

  ngOnInit(): void {
    this.mybreakpoint = window.innerWidth <= 1000 ? 2 : 4;
    if (window.innerWidth <= 532) {
      this.mybreakpoint = 1;
    }

    this.subs.sink = this.currentPage$
      .pipe(
        distinctUntilChanged(),
        switchMap((currentPage) =>
          this.priceService.getPricesByMerchantId(currentPage, this.pageSize),
        ),
      )
      .subscribe((data) => {
        this.totalPrices = data.count;
        this.pricesData = data;
      });

    this.subs.sink = this.refresh$
      .pipe(
        switchMap(() =>
          this.priceService.getPricesByMerchantId(
            this.currentPage.getValue(),
            this.pageSize,
          ),
        ),
      )
      .subscribe((data) => {
        this.totalPrices = data.count;
        this.pricesData = data;
      });
  }

  onPageChange(event: PageEvent): void {
    this.currentPage.next(event.pageIndex + 1);
  }

  handleSize(event: any): void {
    this.mybreakpoint = event.target.innerWidth <= 1000 ? 2 : 4;
    if (event.target.innerWidth <= 532) {
      this.mybreakpoint = 1;
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

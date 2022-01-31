import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  GetAllMerchantDecisionPendingOrderResponseData,
  GetAllMerchantDecisionPendingOrderResponseDataRow,
} from 'src/app/order/order.interface';

@Component({
  selector: 'app-order-list-table',
  templateUrl: './order-list-table.component.html',
  styleUrls: ['./order-list-table.component.scss'],
})
export class OrderListTableComponent
  implements OnInit, AfterViewInit, OnChanges
{
  @Input() orderData: GetAllMerchantDecisionPendingOrderResponseData;
  @Output() selectOrder: EventEmitter<string> = new EventEmitter<string>();
  @Output() pageEvent: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<GetAllMerchantDecisionPendingOrderResponseDataRow>;
  displayedColumns: string[] = [
    'product_name',
    'quantity',
    'price',
    'stock',
    'amount_paid',
    'action',
  ];

  constructor() {}

  // tslint:disable-next-line: variable-name
  ngOnChanges(_changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.orderData.rows);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.orderData.rows);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onSelectOrder(id: string): void {
    this.selectOrder.emit(id);
  }

  onPageEvent(pageEvent: PageEvent): void {
    this.pageEvent.emit(pageEvent);
  }
}

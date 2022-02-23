import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PriceData } from 'src/app/product/product.interface';

@Component({
  selector: 'app-product-price-table',
  templateUrl: './product-price-table.component.html',
  styleUrls: ['./product-price-table.component.scss'],
})
export class ProductPriceTableComponent implements OnInit, AfterViewInit {
  @Input() priceData: PriceData[];
  // @Output() addToCart: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<PriceData>;
  displayedColumns: string[] = [
    'merchant_name',
    'price',
    // 'action'
  ];

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.priceData);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // onAddToCart(id: string): void {
  //   this.addToCart.emit(id);
  // }
}

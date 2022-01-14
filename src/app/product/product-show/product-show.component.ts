import { FullProductData } from './../product.interface';
import { SubSink } from 'subsink';
import { ActivatedRoute, Router } from '@angular/router';
import { PriceService } from './../../price/price.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.scss'],
})
export class ProductShowComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  productId: string;

  productDetails: FullProductData;

  constructor(
    private productService: ProductService,
    private priceService: PriceService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.params.id) {
      this.productId = this.route.snapshot.params.id;
    }

    this.subs.sink = this.productService
      .getProductWithCategoryPriceReviewManufacturer(this.productId)
      .subscribe((data) => {
        this.productDetails = data;
      });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

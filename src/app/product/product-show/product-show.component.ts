import { PriceAddComponent } from './../../shared/price/price-add/price-add.component';
import { MatDialog } from '@angular/material/dialog';
import { Auth0Service } from './../../auth/auth0.service';
import { FullProductData, PriceData } from './../product.interface';
import { SubSink } from 'subsink';
import { ActivatedRoute, Router } from '@angular/router';
import { PriceService } from './../../price/price.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { Auth0ProfileData } from 'src/app/auth/auth.interface';
import { AddPriceData } from 'src/app/price/price.interface';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.scss'],
})
export class ProductShowComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  productId: string;

  productDetails: FullProductData;

  selectedImage = 0;

  reviewStar = 0;

  profileClaims: Auth0ProfileData;

  priceData: PriceData;

  constructor(
    private productService: ProductService,
    private priceService: PriceService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: Auth0Service,
    private dialogService: MatDialog,
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.params.id) {
      this.productId = this.route.snapshot.params.id;
    }
    this.profileClaims = this.authService.ProfileClaims;

    this.subs.sink = this.productService
      .getProductWithCategoryPriceReviewManufacturer(this.productId)
      .subscribe((data) => {
        this.productDetails = {
          ...data,
          specification: JSON.parse(data.specification),
        };
        this.findReviewStar();
        this.findPriceAdded();
      });
  }

  findReviewStar(): void {
    const total = this.productDetails.reviewes.length;
    if (!total) {
      this.reviewStar = 0;
      return;
    }
    const sum = this.productDetails.reviewes.reduce((previous, current) => {
      return previous + current.stars;
    }, 0);
    this.reviewStar = Math.floor(sum / total);
  }

  findPriceAdded(): void {
    this.priceData = this.productDetails.prices.find(
      (data) => data.merchantId === this.profileClaims.userId,
    );
  }

  async addPrice(): Promise<void> {
    const addPriceDialogRef = this.dialogService.open(PriceAddComponent, {
      data: { name: this.productDetails.name, id: this.productDetails.id },
      hasBackdrop: true,
      autoFocus: true,
    });

    const dialogReturnData: { valid: boolean; data?: AddPriceData } =
      await addPriceDialogRef.afterClosed().toPromise();

    if (!dialogReturnData.valid) {
      return;
    }
    this.priceService.addPrice(dialogReturnData.data);
  }

  addToCart(id: string): void {
    console.log(id);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

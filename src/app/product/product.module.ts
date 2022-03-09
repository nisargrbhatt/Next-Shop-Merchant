import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';
// import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCategoryListComponent } from './product-category-list/product-category-list.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { ProductCardSmallComponent } from '../shared/product/product-card-small/product-card-small.component';
import { ProductPriceTableComponent } from '../shared/product/product-price-table/product-price-table.component';
import { ProductScrollCardsComponent } from '../shared/product/product-scroll-cards/product-scroll-cards.component';
import { DragScrollModule } from 'ngx-drag-scroll';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCategoryListComponent,
    ProductShowComponent,
    ProductCardSmallComponent,
    ProductScrollCardsComponent,
    ProductPriceTableComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    AngularMaterialModule,
    // SharedModule,
    RouterModule,
    DragScrollModule,
  ],
})
export class ProductModule {}

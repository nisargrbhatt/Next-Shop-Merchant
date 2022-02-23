import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './../angular-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './dialog/error/error.component';
import { ResMesComponent } from './dialog/res-mes/res-mes.component';
import { EmailVerificationComponent } from './dialog/email-verification/email-verification.component';
import { LoaderComponent } from './loader/loader.component';

import { DragScrollModule } from 'ngx-drag-scroll';
import { ProductScrollCardsComponent } from './product/product-scroll-cards/product-scroll-cards.component';
import { ProductCardSmallComponent } from './product/product-card-small/product-card-small.component';
import { ProductPriceTableComponent } from './product/product-price-table/product-price-table.component';
import { PriceAddComponent } from './price/price-add/price-add.component';
import { PriceShowUpdateComponent } from './price/price-show-update/price-show-update.component';
import { OrderListTableComponent } from './order/order-list-table/order-list-table.component';
import { ConfirmComponent } from './dialog/confirm/confirm.component';
import { DeclineComponent } from './dialog/decline/decline.component';

import { BarLineChartComponent } from './charts/bar-line-chart/bar-line-chart.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    DragScrollModule,
  ],
  declarations: [
    // SidenavComponent,
    HeaderComponent,
    ErrorComponent,
    ResMesComponent,
    EmailVerificationComponent,
    LoaderComponent,
    ProductCardSmallComponent,
    ProductScrollCardsComponent,
    ProductPriceTableComponent,
    PriceAddComponent,
    PriceShowUpdateComponent,
    OrderListTableComponent,
    ConfirmComponent,
    DeclineComponent,
    BarLineChartComponent,
  ],
  providers: [],
  exports: [
    // SidenavComponent,
    HeaderComponent,
    ErrorComponent,
    ResMesComponent,
    EmailVerificationComponent,
    LoaderComponent,
    ProductCardSmallComponent,
    ProductScrollCardsComponent,
    ProductPriceTableComponent,
    PriceAddComponent,
    PriceShowUpdateComponent,
    OrderListTableComponent,
    ConfirmComponent,
    DeclineComponent,
    BarLineChartComponent,
  ],
})
export class SharedModule {}

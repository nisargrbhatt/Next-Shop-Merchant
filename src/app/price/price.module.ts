import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceRoutingModule } from './price-routing.module';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './../angular-material.module';
// import { SharedModule } from './../shared/shared.module';
import { PricesListComponent } from './prices-list/prices-list.component';
import { PriceAddComponent } from '../shared/price/price-add/price-add.component';
import { PriceShowUpdateComponent } from '../shared/price/price-show-update/price-show-update.component';

@NgModule({
  declarations: [
    PricesListComponent,
    PriceAddComponent,
    PriceShowUpdateComponent,
  ],
  imports: [
    CommonModule,
    PriceRoutingModule,
    AngularMaterialModule,
    // SharedModule,
    RouterModule,
  ],
})
export class PriceModule {}

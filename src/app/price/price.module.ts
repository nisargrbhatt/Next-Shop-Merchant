import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceRoutingModule } from './price-routing.module';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './../angular-material.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PriceRoutingModule,
    AngularMaterialModule,
    SharedModule,
    RouterModule,
  ],
})
export class PriceModule {}

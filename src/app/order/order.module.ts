import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    AngularMaterialModule,
    SharedModule,
    RouterModule,
  ],
})
export class OrderModule {}

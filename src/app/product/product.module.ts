import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';
import { SharedModule } from '../shared/shared.module';

import { NgxViewerModule } from 'ngx-viewer';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    AngularMaterialModule,
    SharedModule,
    RouterModule,
    NgxViewerModule,
  ],
})
export class ProductModule {}

import { ProductShowComponent } from './product-show/product-show.component';
import { ProductCategoryListComponent } from './product-category-list/product-category-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'category/:id',
    component: ProductCategoryListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'show/:id',
    component: ProductShowComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class ProductRoutingModule {}

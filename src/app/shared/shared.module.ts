import { Auth0Service } from './../auth/auth0.service';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './../angular-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './dialog/error/error.component';
import { ResMesComponent } from './dialog/res-mes/res-mes.component';
import { EmailVerificationComponent } from './dialog/email-verification/email-verification.component';
import { LoaderComponent } from './loader/loader.component';

import { DragScrollModule } from 'ngx-drag-scroll';
import { ProductScrollCardsComponent } from './product/product-scroll-cards/product-scroll-cards.component';
import { ProductCardSmallComponent } from './product/product-card-small/product-card-small.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    DragScrollModule,
  ],
  declarations: [
    SidenavComponent,
    HeaderComponent,
    ErrorComponent,
    ResMesComponent,
    EmailVerificationComponent,
    LoaderComponent,
    ProductCardSmallComponent,
    ProductScrollCardsComponent,
  ],
  providers: [],
  exports: [
    SidenavComponent,
    HeaderComponent,
    ErrorComponent,
    ResMesComponent,
    EmailVerificationComponent,
    LoaderComponent,
    ProductCardSmallComponent,
    ProductScrollCardsComponent,
  ],
})
export class SharedModule {}

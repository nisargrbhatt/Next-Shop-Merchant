import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from './../angular-material.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMaterialModule,
    SharedModule,
    RouterModule,
  ],
  declarations: [],
  providers: [],
  exports: [],
})
export class AuthModule {}

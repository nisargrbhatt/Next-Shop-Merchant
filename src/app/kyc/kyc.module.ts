import { KycRoutingModule } from './kyc-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './../angular-material.module';
import { SharedModule } from './../shared/shared.module';
import { CreateKycApprovalComponent } from './create-kyc-approval/create-kyc-approval.component';
import { KycApprovalsComponent } from './kyc-approvals/kyc-approvals.component';

@NgModule({
  declarations: [CreateKycApprovalComponent, KycApprovalsComponent],
  imports: [
    CommonModule,
    KycRoutingModule,
    AngularMaterialModule,
    SharedModule,
    RouterModule,
  ],
})
export class KycModule {}

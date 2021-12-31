import { KycApprovalsComponent } from './kyc-approvals/kyc-approvals.component';
import { CreateKycApprovalComponent } from './create-kyc-approval/create-kyc-approval.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: KycApprovalsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-approval',
    component: CreateKycApprovalComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class KycRoutingModule {}

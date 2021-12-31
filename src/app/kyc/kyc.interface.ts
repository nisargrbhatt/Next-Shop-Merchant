export interface ErrorData {
  code: string;
  message: string;
}

export interface DialogData {
  header: string;
  message: string;
}

export interface FindAllKYCApprovalsResponseData {
  count: number;
  rows: any;
}

export interface FindKYCApprovalResponseData {}

export interface CreateKycApprovalData {
  name: string;
  aadhaar_number: string;
  contact_no?: string;
  email?: string;
  photo?: string[];
}

export interface CreateKycApprovalResponse {
  message: string;
  valid: boolean;
  error?: ErrorData;
  dialog?: DialogData;
}

export interface FindAllKYCApprovalsResponse {
  message: string;
  valid: boolean;
  error?: ErrorData;
  dialog?: DialogData;
  data?: FindAllKYCApprovalsResponseData;
}

export interface FindKYCApprovalResponse {
  message: string;
  valid: boolean;
  error?: ErrorData;
  dialog?: DialogData;
  data?: any;
  // data?: FindKYCApprovalResponseData;
}

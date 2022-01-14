export interface ErrorData {
  code: string;
  message: string;
}

export interface DialogData {
  header: string;
  message: string;
}

export interface AddPriceData {
  price: number;
  stock: number;
  productId: string;
}

export interface AddPriceResponse {
  message: string;
  valid: boolean;
  dialog?: DialogData;
  error?: ErrorData;
}

export interface UpdatePriceData {
  price?: number;
  stock?: number;
  priceId: string;
}

export interface UpdatePriceResponse {
  message: string;
  valid: boolean;
  dialog?: DialogData;
  error?: ErrorData;
}

export interface GetPriceResponse {
  message: string;
  valid: boolean;
  dialog?: DialogData;
  error?: ErrorData;
  data?: any;
}

export interface GetPricesByMerchantIdResponseData {
  rows: any[];
  count: number;
}

export interface GetPricesByMerchantIdResponse {
  message: string;
  valid: boolean;
  dialog?: DialogData;
  error?: ErrorData;
  data?: GetPricesByMerchantIdResponseData;
}

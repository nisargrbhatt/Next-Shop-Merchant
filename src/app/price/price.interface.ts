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
  data?: PriceData;
}

export interface GetPricesByMerchantIdResponseData {
  rows: PriceData[];
  count: number;
}

export interface GetPricesByMerchantIdResponse {
  message: string;
  valid: boolean;
  dialog?: DialogData;
  error?: ErrorData;
  data?: GetPricesByMerchantIdResponseData;
}

export interface PriceData {
  id: string;
  price: number;
  stock: number;
  merchantId: string;
  productId: string;
  createdAt: string;
  updatedAt: string;
  product?: ProductData;
}

export interface ProductData {
  id: string;
  name: string;
  description: string;
  small_description: string;
  specification: string;
  slug: string;
  categoryId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  images?: ImageData[];
}

export interface ImageData {
  id: string;
  name: string;
  url: string;
  productId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ErrorData {
  code: string;
  message: string;
}

export interface DialogData {
  header: string;
  message: string;
}

export interface OrderDecisionByMerchantData {
  orderId: string;
  decision: boolean;
}

export interface OrderDecisionByMerchantResponse {
  message: string;
  valid: boolean;
  error?: ErrorData;
  dialog?: DialogData;
}

export interface GetAllMerchantDecisionPendingOrderResponseData {
  rows: GetAllMerchantDecisionPendingOrderResponseDataRow[];
  count: number;
}

export interface GetAllMerchantDecisionPendingOrderResponse {
  message: string;
  valid: boolean;
  error?: ErrorData;
  dialog?: DialogData;
  data?: GetAllMerchantDecisionPendingOrderResponseData;
}

export interface GetAllMerchantDecisionPendingOrderResponseDataRow {
  id: string;
  rp_order_id: string;
  rp_customer_id: string;
  order_status: boolean;
  quantity: number;
  rp_prefill_data: string;
  order_decision_status: boolean;
  order_decision?: boolean;
  delivery_status: boolean;
  order_cancel: boolean;
  refund_status: boolean;
  rp_refund_id?: string;
  amount: number;
  userId: string;
  addressId: string;
  productId: string;
  priceId: string;
  merchantId: string;
  createdAt: string;
  updatedAt: string;
  product: Product;
  address: Address;
  price: Price;
  user: User;
}

export interface Address {
  id: string;
  name: string;
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  zipcode: string;
  contact_no: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Price {
  id: string;
  price: number;
  stock: number;
  merchantId: string;
  productId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
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
  images: Image[];
}

export interface Image {
  id: string;
  name: string;
  url: string;
  productId: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email?: string;
  name: string;
  contact_no?: string;
  role: string;
  rp_customer_id?: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetOrderResponse {
  message: string;
  valid: boolean;
  error?: ErrorData;
  dialog?: DialogData;
  data?: GetAllMerchantDecisionPendingOrderResponseDataRow;
}

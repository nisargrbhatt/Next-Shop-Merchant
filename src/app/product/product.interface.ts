export interface ErrorData {
  code: string;
  message: string;
}

export interface DialogData {
  header: string;
  message: string;
}

export interface GetProductWithCategoryPriceReviewManufacturerResponse {
  message: string;
  valid: boolean;
  error?: ErrorData;
  dialog?: DialogData;
  data?: any;
}

export interface GetAllProductWithCategoryImageByCategoryIdResponse {
  message: string;
  valid: boolean;
  error?: ErrorData;
  dialog?: DialogData;
  data?: GetAllProductWithCategoryImageByCategoryIdResponseData;
}

export interface GetAllProductWithCategoryImageBySearchResponse {
  message: string;
  valid: boolean;
  error?: ErrorData;
  dialog?: DialogData;
  data?: GetAllProductWithCategoryImageByCategoryIdResponseData;
}

export interface GetAllProductLookaheadWithCategoryImageBySearchResponse {
  message: string;
  valid: boolean;
  error?: ErrorData;
  dialog?: DialogData;
  data?: GetAllProductLookaheadWithCategoryImageBySearchResponseData;
}

export interface GetAllProductWithCategoryImageByCategoryIdResponseData {
  count: number;
  rows: ProductData[];
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
  images?: Image[];
  category?: Category;
}

export interface Category {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface Image {
  id: string;
  name: string;
  url: string;
  productId: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetAllProductLookaheadWithCategoryImageBySearchResponseData {
  count: number;
  rows: GetAllProductLookaheadWithCategoryImageBySearchResponseDataRow[];
}

export interface GetAllProductLookaheadWithCategoryImageBySearchResponseDataRow {
  name: string;
  id: string;
  category: Category;
  images: Image[];
}

export interface Category {
  name: string;
}

export interface Image {
  url: string;
}

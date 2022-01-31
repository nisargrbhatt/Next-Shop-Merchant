import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  OrderDecisionByMerchantResponse,
  OrderDecisionByMerchantData,
  GetAllMerchantDecisionPendingOrderResponse,
  GetAllMerchantDecisionPendingOrderResponseData,
  GetAllMerchantDecisionPendingOrderResponseDataRow,
  GetOrderResponse,
} from './order.interface';

import {
  environment,
  secureAPIURIs,
  basicAPIURIs,
} from 'src/environments/environment';

const BACKEND_URL = environment.production
  ? environment.backend_url_secure
  : environment.backend_url;

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private httpService: HttpClient) {}

  orderDecisionByMerchant(
    orderDecisionByMerchantData: OrderDecisionByMerchantData,
  ): Observable<OrderDecisionByMerchantResponse> {
    return this.httpService.post<OrderDecisionByMerchantResponse>(
      BACKEND_URL + secureAPIURIs.orderDecisionByMerchant.url,
      orderDecisionByMerchantData,
    );
  }

  getAllMerchantDecisionPendingOrder(
    currentPage: number,
    pageSize: number,
  ): Observable<GetAllMerchantDecisionPendingOrderResponseData> {
    return this.httpService
      .get<GetAllMerchantDecisionPendingOrderResponse>(
        BACKEND_URL +
          secureAPIURIs.getAllMerchantDecisionPendingOrder.url +
          `/?currentPage=${currentPage}&pageSize=${pageSize}`,
      )
      .pipe(map((response) => response.data));
  }

  getAllMerchantDecisionAcceptedOrder(
    currentPage: number,
    pageSize: number,
  ): Observable<GetAllMerchantDecisionPendingOrderResponseData> {
    return this.httpService
      .get<GetAllMerchantDecisionPendingOrderResponse>(
        BACKEND_URL +
          secureAPIURIs.getAllMerchantDecisionAcceptedOrder.url +
          `/?currentPage=${currentPage}&pageSize=${pageSize}`,
      )
      .pipe(map((response) => response.data));
  }

  getAllMerchantDecisionRejectedOrder(
    currentPage: number,
    pageSize: number,
  ): Observable<GetAllMerchantDecisionPendingOrderResponseData> {
    return this.httpService
      .get<GetAllMerchantDecisionPendingOrderResponse>(
        BACKEND_URL +
          secureAPIURIs.getAllMerchantDecisionRejectedOrder.url +
          `/?currentPage=${currentPage}&pageSize=${pageSize}`,
      )
      .pipe(map((response) => response.data));
  }

  getOrder(
    orderId: string,
  ): Observable<GetAllMerchantDecisionPendingOrderResponseDataRow> {
    return this.httpService
      .get<GetOrderResponse>(
        BACKEND_URL + secureAPIURIs.getOrder.url + `/?orderId=${orderId}`,
      )
      .pipe(map((response) => response.data));
  }
}

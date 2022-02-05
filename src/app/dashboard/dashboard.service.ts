import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  GetAcceptedOrderOfMerchantByMonthResponseData,
  GetAcceptedOrderOfMerchantByMonthResponse,
} from './dashboard.interface';

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
export class DashboardService {
  constructor(private httpService: HttpClient) {}

  getAcceptedOrderOfMerchantByMonth(): Observable<GetAcceptedOrderOfMerchantByMonthResponseData> {
    return this.httpService
      .get<GetAcceptedOrderOfMerchantByMonthResponse>(
        BACKEND_URL + secureAPIURIs.getAcceptedOrderOfMerchantByMonth.url,
      )
      .pipe(map((response) => response.data));
  }

  getRejectedOrderOfMerchantByMonth(): Observable<GetAcceptedOrderOfMerchantByMonthResponseData> {
    return this.httpService
      .get<GetAcceptedOrderOfMerchantByMonthResponse>(
        BACKEND_URL + secureAPIURIs.getRejectedOrderOfMerchantByMonth.url,
      )
      .pipe(map((response) => response.data));
  }

  getDeliveredOrderOfMerchantByMonth(): Observable<GetAcceptedOrderOfMerchantByMonthResponseData> {
    return this.httpService
      .get<GetAcceptedOrderOfMerchantByMonthResponse>(
        BACKEND_URL + secureAPIURIs.getDeliveredOrderOfMerchantByMonth.url,
      )
      .pipe(map((response) => response.data));
  }

  getCanceledOrderOfMerchantByMonth(): Observable<GetAcceptedOrderOfMerchantByMonthResponseData> {
    return this.httpService
      .get<GetAcceptedOrderOfMerchantByMonthResponse>(
        BACKEND_URL + secureAPIURIs.getCanceledOrderOfMerchantByMonth.url,
      )
      .pipe(map((response) => response.data));
  }

  getUnpaidOrderOfMerchantByMonth(): Observable<GetAcceptedOrderOfMerchantByMonthResponseData> {
    return this.httpService
      .get<GetAcceptedOrderOfMerchantByMonthResponse>(
        BACKEND_URL + secureAPIURIs.getUnpaidOrderOfMerchantByMonth.url,
      )
      .pipe(map((response) => response.data));
  }
}

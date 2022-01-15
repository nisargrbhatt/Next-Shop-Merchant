import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {
  AddPriceData,
  AddPriceResponse,
  GetPriceResponse,
  GetPricesByMerchantIdResponse,
  GetPricesByMerchantIdResponseData,
  UpdatePriceData,
  UpdatePriceResponse,
} from './price.interface';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

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
export class PriceService {
  constructor(
    private router: Router,
    private snackbarService: MatSnackBar,
    private httpService: HttpClient,
  ) {}

  addPrice(addPriceData: AddPriceData): void {
    this.httpService
      .post<AddPriceResponse>(
        BACKEND_URL + secureAPIURIs.addPrice.url,
        addPriceData,
      )
      .subscribe((response) => {
        this.snackbarService.open(response.message, 'Ok', {
          duration: 2 * 1000,
        });
        this.router.navigate(['/price']);
      });
  }

  updatePrice(updatePriceData: UpdatePriceData): void {
    this.httpService
      .put<UpdatePriceResponse>(
        BACKEND_URL + secureAPIURIs.updatePrice.url,
        updatePriceData,
      )
      .subscribe((response) => {
        this.snackbarService.open(response.message, 'Ok', {
          duration: 2 * 1000,
        });
        // this.router.navigate(['/price']);
      });
  }

  getPrice(priceId: string): Observable<any> {
    return this.httpService
      .get<GetPriceResponse>(
        BACKEND_URL + secureAPIURIs.getPrice.url + `/?priceId=${priceId}`,
      )
      .pipe(map((response) => response.data));
  }

  getPricesByMerchantId(
    currentPage: number,
    pageSize: number,
  ): Observable<GetPricesByMerchantIdResponseData> {
    return this.httpService
      .get<GetPricesByMerchantIdResponse>(
        BACKEND_URL +
          secureAPIURIs.getPricesByMerchantId.url +
          `/?currentPage=${currentPage}&pageSize=${pageSize}`,
      )
      .pipe(map((response) => response.data));
  }
}

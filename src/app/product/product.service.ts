import { SharedService } from './../shared/shared.service';
import {
  FullProductData,
  GetAllProductLookaheadWithCategoryImageBySearchResponse,
  GetAllProductLookaheadWithCategoryImageBySearchResponseData,
  GetAllProductWithCategoryImageByCategoryIdResponse,
  GetAllProductWithCategoryImageByCategoryIdResponseData,
  GetAllProductWithCategoryImageBySearchResponse,
  GetProductWithCategoryPriceReviewManufacturerResponse,
} from './product.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
export class ProductService {
  constructor(
    private httpService: HttpClient,
    private router: Router,
    private snackbarService: MatSnackBar,
    private sharedService: SharedService,
  ) {}

  getProductWithCategoryPriceReviewManufacturer(
    productId?: string,
  ): Observable<FullProductData> {
    return this.httpService
      .get<GetProductWithCategoryPriceReviewManufacturerResponse>(
        BACKEND_URL +
          basicAPIURIs.getProductWithCategoryPriceReviewManufacturer +
          `/?productId=${productId}`,
      )
      .pipe(map((response) => response.data));
  }

  getAllProductWithCategoryImageByCategoryId(
    categoryId: string,
    currentPage: number,
    pageSize: number,
    search?: string,
  ): Observable<GetAllProductWithCategoryImageByCategoryIdResponseData> {
    return this.httpService
      .get<GetAllProductWithCategoryImageByCategoryIdResponse>(
        BACKEND_URL +
          basicAPIURIs.getAllProductWithCategoryImageByCategoryId +
          `/?categoryId=${categoryId}&currentPage=${currentPage}&pageSize=${pageSize}&search=${encodeURI(
            this.sharedService.searchFilter(search),
          )}`,
      )
      .pipe(map((response) => response.data));
  }

  getAllProductWithCategoryImageBySearch(
    currentPage: number,
    pageSize: number,
    search?: string,
  ): Observable<GetAllProductWithCategoryImageByCategoryIdResponseData> {
    return this.httpService
      .get<GetAllProductWithCategoryImageBySearchResponse>(
        BACKEND_URL +
          basicAPIURIs.getAllProductWithCategoryImageBySearch +
          `/?currentPage=${currentPage}&pageSize=${pageSize}&search=${encodeURI(
            this.sharedService.searchFilter(search),
          )}`,
      )
      .pipe(map((response) => response.data));
  }

  getAllProductLookaheadWithCategoryImageBySearch(
    search?: string,
  ): Observable<GetAllProductLookaheadWithCategoryImageBySearchResponseData> {
    return this.httpService
      .get<GetAllProductLookaheadWithCategoryImageBySearchResponse>(
        BACKEND_URL +
          basicAPIURIs.getAllProductLookaheadWithCategoryImageBySearch +
          `/?search=${encodeURI(this.sharedService.searchFilter(search))}`,
      )
      .pipe(map((response) => response.data));
  }
}

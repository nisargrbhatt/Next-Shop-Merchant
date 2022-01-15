import {
  GetAllCategoriesWithFiveProductsResponse,
  GetAllCategoriesWithFiveProductsResponseData,
} from './category.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import {
  environment,
  secureAPIURIs,
  basicAPIURIs,
} from 'src/environments/environment';
import { map } from 'rxjs/operators';

const BACKEND_URL = environment.production
  ? environment.backend_url_secure
  : environment.backend_url;

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(
    private httpService: HttpClient,
    private router: Router,
    private snackbarService: MatSnackBar,
  ) {}

  getAllCategoriesWithFiveProducts(): Observable<GetAllCategoriesWithFiveProductsResponseData> {
    return this.httpService
      .get<GetAllCategoriesWithFiveProductsResponse>(
        BACKEND_URL + basicAPIURIs.getAllCategoriesWithFiveProducts,
      )
      .pipe(map((response) => response.data));
  }
}

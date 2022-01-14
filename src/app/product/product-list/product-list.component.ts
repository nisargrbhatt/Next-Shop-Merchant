import { Router } from '@angular/router';
import { ProductCardSmallDetails } from './../../shared/product/product.interface';
import { CategoryService } from './../category.service';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductService } from './../product.service';
import { SubSink } from 'subsink';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  GetAllProductLookaheadWithCategoryImageBySearchResponseData,
  GetAllProductLookaheadWithCategoryImageBySearchResponseDataRow,
  GetAllProductWithCategoryImageByCategoryIdResponseData,
  ProductData,
} from '../product.interface';
import { PageEvent } from '@angular/material/paginator';
import { GetAllCategoriesWithFiveProductsResponseData } from '../category.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  private subs = new SubSink();

  currentPage = new FormControl(1);
  currentPage$ = this.currentPage.valueChanges;

  pageSize = 10;

  totalProducts = 0;

  search = new FormControl('');
  search$ = this.search.valueChanges;

  searchLookaheads$: Observable<
    GetAllProductLookaheadWithCategoryImageBySearchResponseDataRow[]
  >;
  searchData: GetAllProductWithCategoryImageByCategoryIdResponseData;

  categoryData: GetAllCategoriesWithFiveProductsResponseData;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.categoryService
      .getAllCategoriesWithFiveProducts()
      .subscribe((data) => {
        this.categoryData = data;
      });

    this.searchLookaheads$ = this.search$.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      filter((search) => search !== ''),
      switchMap((search) =>
        this.productService
          .getAllProductLookaheadWithCategoryImageBySearch(search)
          .pipe(map((data) => data.rows)),
      ),
    );

    this.subs.sink = this.search$
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        filter((search) => search !== ''),
        switchMap((search) =>
          this.productService.getAllProductWithCategoryImageBySearch(
            this.currentPage.value,
            this.pageSize,
            search,
          ),
        ),
      )
      .subscribe((data) => {
        this.searchData = data;
        this.totalProducts = data.count;
      });

    this.subs.sink = this.currentPage$
      .pipe(
        distinctUntilChanged(),
        switchMap((currentPage) =>
          this.productService.getAllProductWithCategoryImageBySearch(
            currentPage,
            this.pageSize,
            this.search.value,
          ),
        ),
      )
      .subscribe((data) => {
        this.searchData = data;
        this.totalProducts = data.count;
      });
  }

  onPageChange(pageData: PageEvent): void {
    this.currentPage.setValue(pageData.pageIndex + 1);
  }

  onProductClick(id: string): void {
    this.router.navigate(['/product/show/', id]);
  }

  getProductCardDetails(product: ProductData): ProductCardSmallDetails {
    return {
      id: product.id,
      category: product.category.name,
      image: product.images[0].url,
      name: product.name,
    };
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

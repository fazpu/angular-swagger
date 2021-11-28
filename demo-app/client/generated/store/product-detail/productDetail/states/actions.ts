/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {ProductDetailParams} from '../../../../controllers/ProductDetail';
import * as __model from '../../../../model';

export enum ProductDetailActions {
  PRODUCT_DETAIL_START = '[ProductDetail productDetail] Start',
  PRODUCT_DETAIL_SUCCESS = '[ProductDetail productDetail] Success',
  PRODUCT_DETAIL_ERROR = '[ProductDetail productDetail] Error',
  PRODUCT_DETAIL_CLEAN = '[ProductDetail productDetail] Clean',
}

export class ProductDetailStart implements Action {
  public readonly type = ProductDetailActions.PRODUCT_DETAIL_START;
  constructor(public payload: ProductDetailParams) {}
}

export class ProductDetailSuccess implements Action {
  public readonly type = ProductDetailActions.PRODUCT_DETAIL_SUCCESS;
  constructor(public payload: __model.ProductDetail) {}
}

export class ProductDetailError implements Action {
  public readonly type = ProductDetailActions.PRODUCT_DETAIL_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class ProductDetailClean implements Action {
  public readonly type = ProductDetailActions.PRODUCT_DETAIL_CLEAN;
}

export type ProductDetailAction = ProductDetailStart |
ProductDetailSuccess |
ProductDetailError |
ProductDetailClean;

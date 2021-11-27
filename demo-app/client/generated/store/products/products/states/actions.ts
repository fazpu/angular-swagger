/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {ProductsParams} from '../../../../controllers/Products';
import * as __model from '../../../../model';

export enum ProductsActions {
  PRODUCTS_START = '[Products products] Start',
  PRODUCTS_SUCCESS = '[Products products] Success',
  PRODUCTS_ERROR = '[Products products] Error',
  PRODUCTS_CLEAN = '[Products products] Clean',
}

export class ProductsStart implements Action {
  readonly type = ProductsActions.PRODUCTS_START;
  constructor(public payload: ProductsParams) {}
}

export class ProductsSuccess implements Action {
  readonly type = ProductsActions.PRODUCTS_SUCCESS;
  constructor(public payload: __model.Products) {}
}

export class ProductsError implements Action {
  readonly type = ProductsActions.PRODUCTS_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class ProductsClean implements Action {
  readonly type = ProductsActions.PRODUCTS_CLEAN;
}

export type ProductsAction = ProductsStart |
ProductsSuccess |
ProductsError |
ProductsClean;

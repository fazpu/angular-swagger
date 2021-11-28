/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as __model from '../../../../model';
import {ProductsAction, ProductsActions} from './actions';

export interface ProductsState {
  data: __model.Products | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialProductsState: ProductsState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Products_Products';
export const getProductsStateSelector = createFeatureSelector<ProductsState>(selectorName);

export function ProductsReducer(
  state: ProductsState = initialProductsState,
  action: ProductsAction): ProductsState {

  switch (action.type) {
    case ProductsActions.PRODUCTS_START:
      return {...state, loading: true, error: null};

    case ProductsActions.PRODUCTS_SUCCESS:
      return {...state, data: action.payload, loading: false};

    case ProductsActions.PRODUCTS_ERROR:
      return {...state, error: action.payload, loading: false};

    case ProductsActions.PRODUCTS_CLEAN:
      return initialProductsState;

    default:
      return state;
  }
}

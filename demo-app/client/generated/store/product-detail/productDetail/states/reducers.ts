/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as __model from '../../../../model';
import {ProductDetailAction, ProductDetailActions} from './actions';

export interface ProductDetailState {
  data: __model.ProductDetail | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialProductDetailState: ProductDetailState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'ProductDetail_ProductDetail';
export const getProductDetailState = createFeatureSelector<ProductDetailState>(selectorName);

export function ProductDetailReducer(
  state: ProductDetailState = initialProductDetailState,
  action: ProductDetailAction): ProductDetailState {

  switch (action.type) {
    case ProductDetailActions.PRODUCT_DETAIL_START:
      return {...state, loading: true, error: null};

    case ProductDetailActions.PRODUCT_DETAIL_SUCCESS:
      return {...state, data: action.payload, loading: false};

    case ProductDetailActions.PRODUCT_DETAIL_ERROR:
      return {...state, error: action.payload, loading: false};

    case ProductDetailActions.PRODUCT_DETAIL_CLEAN:
      return initialProductDetailState;

    default:
      return state;
  }
}

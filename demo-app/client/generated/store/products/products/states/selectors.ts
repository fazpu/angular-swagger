/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createSelector} from '@ngrx/store';
import {getProductsState} from './reducers';

export const getProductsStateData = createSelector(
  getProductsState,
  state => state.data,
);

export const getProductsStateError = createSelector(
  getProductsState,
  state => state.error,
);

export const getProductsStateLoading = createSelector(
  getProductsState,
  state => state.loading,
);


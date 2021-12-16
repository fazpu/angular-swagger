/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createSelector} from '@ngrx/store';
import {getProductDetailState} from './reducers';

export const getProductDetailStateData = createSelector(
  getProductDetailState,
  state => state.data,
);

export const getProductDetailStateError = createSelector(
  getProductDetailState,
  state => state.error,
);

export const getProductDetailStateLoading = createSelector(
  getProductDetailState,
  state => state.loading,
);


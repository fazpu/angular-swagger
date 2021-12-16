/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createSelector} from '@ngrx/store';
import {getOrderState} from './reducers';

export const getOrderStateData = createSelector(
  getOrderState,
  state => state.data,
);

export const getOrderStateError = createSelector(
  getOrderState,
  state => state.error,
);

export const getOrderStateLoading = createSelector(
  getOrderState,
  state => state.loading,
);


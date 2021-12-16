/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createSelector} from '@ngrx/store';
import {getPutOrderState} from './reducers';

export const getPutOrderStateData = createSelector(
  getPutOrderState,
  state => state.data,
);

export const getPutOrderStateError = createSelector(
  getPutOrderState,
  state => state.error,
);

export const getPutOrderStateLoading = createSelector(
  getPutOrderState,
  state => state.loading,
);


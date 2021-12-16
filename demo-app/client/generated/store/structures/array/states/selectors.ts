/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createSelector} from '@ngrx/store';
import {getArrayState} from './reducers';

export const getArrayStateData = createSelector(
  getArrayState,
  state => state.data,
);

export const getArrayStateError = createSelector(
  getArrayState,
  state => state.error,
);

export const getArrayStateLoading = createSelector(
  getArrayState,
  state => state.loading,
);


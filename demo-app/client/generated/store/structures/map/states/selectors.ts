/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createSelector} from '@ngrx/store';
import {getMapState} from './reducers';

export const getMapStateData = createSelector(
  getMapState,
  state => state.data,
);

export const getMapStateError = createSelector(
  getMapState,
  state => state.error,
);

export const getMapStateLoading = createSelector(
  getMapState,
  state => state.loading,
);


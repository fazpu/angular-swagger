/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createSelector} from '@ngrx/store';
import {getPositionsState} from './reducers';

export const getPositionsStateData = createSelector(
  getPositionsState,
  state => state.data,
);

export const getPositionsStateError = createSelector(
  getPositionsState,
  state => state.error,
);

export const getPositionsStateLoading = createSelector(
  getPositionsState,
  state => state.loading,
);


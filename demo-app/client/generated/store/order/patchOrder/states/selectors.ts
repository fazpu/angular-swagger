/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createSelector} from '@ngrx/store';
import {getPatchOrderState} from './reducers';

export const getPatchOrderStateData = createSelector(
  getPatchOrderState,
  state => state.data,
);

export const getPatchOrderStateError = createSelector(
  getPatchOrderState,
  state => state.error,
);

export const getPatchOrderStateLoading = createSelector(
  getPatchOrderState,
  state => state.loading,
);


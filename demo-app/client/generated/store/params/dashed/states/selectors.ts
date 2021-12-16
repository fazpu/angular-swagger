/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createSelector} from '@ngrx/store';
import {getDashedState} from './reducers';

export const getDashedStateData = createSelector(
  getDashedState,
  state => state.data,
);

export const getDashedStateError = createSelector(
  getDashedState,
  state => state.error,
);

export const getDashedStateLoading = createSelector(
  getDashedState,
  state => state.loading,
);


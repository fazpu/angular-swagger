/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createSelector} from '@ngrx/store';
import {getLoginState} from './reducers';

export const getLoginStateData = createSelector(
  getLoginState,
  state => state.data,
);

export const getLoginStateError = createSelector(
  getLoginState,
  state => state.error,
);

export const getLoginStateLoading = createSelector(
  getLoginState,
  state => state.loading,
);


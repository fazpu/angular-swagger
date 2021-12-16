/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createSelector} from '@ngrx/store';
import {getLogoutState} from './reducers';

export const getLogoutStateData = createSelector(
  getLogoutState,
  state => state.data,
);

export const getLogoutStateError = createSelector(
  getLogoutState,
  state => state.error,
);

export const getLogoutStateLoading = createSelector(
  getLogoutState,
  state => state.loading,
);


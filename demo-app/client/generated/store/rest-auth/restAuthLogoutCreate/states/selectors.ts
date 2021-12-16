/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createSelector} from '@ngrx/store';
import {getRestAuthLogoutCreateState} from './reducers';

export const getRestAuthLogoutCreateStateData = createSelector(
  getRestAuthLogoutCreateState,
  state => state.data,
);

export const getRestAuthLogoutCreateStateError = createSelector(
  getRestAuthLogoutCreateState,
  state => state.error,
);

export const getRestAuthLogoutCreateStateLoading = createSelector(
  getRestAuthLogoutCreateState,
  state => state.loading,
);


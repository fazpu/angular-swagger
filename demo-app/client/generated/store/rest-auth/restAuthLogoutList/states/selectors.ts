/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createSelector} from '@ngrx/store';
import {getRestAuthLogoutListState} from './reducers';

export const getRestAuthLogoutListStateData = createSelector(
  getRestAuthLogoutListState,
  state => state.data,
);

export const getRestAuthLogoutListStateError = createSelector(
  getRestAuthLogoutListState,
  state => state.error,
);

export const getRestAuthLogoutListStateLoading = createSelector(
  getRestAuthLogoutListState,
  state => state.loading,
);


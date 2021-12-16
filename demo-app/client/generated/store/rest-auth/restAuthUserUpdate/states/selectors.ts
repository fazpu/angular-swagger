/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createSelector} from '@ngrx/store';
import {getRestAuthUserUpdateState} from './reducers';

export const getRestAuthUserUpdateStateData = createSelector(
  getRestAuthUserUpdateState,
  state => state.data,
);

export const getRestAuthUserUpdateStateError = createSelector(
  getRestAuthUserUpdateState,
  state => state.error,
);

export const getRestAuthUserUpdateStateLoading = createSelector(
  getRestAuthUserUpdateState,
  state => state.loading,
);


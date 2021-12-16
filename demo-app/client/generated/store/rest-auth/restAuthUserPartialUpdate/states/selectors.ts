/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createSelector} from '@ngrx/store';
import {getRestAuthUserPartialUpdateState} from './reducers';

export const getRestAuthUserPartialUpdateStateData = createSelector(
  getRestAuthUserPartialUpdateState,
  state => state.data,
);

export const getRestAuthUserPartialUpdateStateError = createSelector(
  getRestAuthUserPartialUpdateState,
  state => state.error,
);

export const getRestAuthUserPartialUpdateStateLoading = createSelector(
  getRestAuthUserPartialUpdateState,
  state => state.loading,
);


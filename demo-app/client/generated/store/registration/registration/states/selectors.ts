/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createSelector} from '@ngrx/store';
import {getRegistrationState} from './reducers';

export const getRegistrationStateData = createSelector(
  getRegistrationState,
  state => state.data,
);

export const getRegistrationStateError = createSelector(
  getRegistrationState,
  state => state.error,
);

export const getRegistrationStateLoading = createSelector(
  getRegistrationState,
  state => state.loading,
);


/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createSelector} from '@ngrx/store';
import {getRestAuthUserReadState} from './reducers';

export const getRestAuthUserReadStateData = createSelector(
  getRestAuthUserReadState,
  state => state.data,
);

export const getRestAuthUserReadStateError = createSelector(
  getRestAuthUserReadState,
  state => state.error,
);

export const getRestAuthUserReadStateLoading = createSelector(
  getRestAuthUserReadState,
  state => state.loading,
);


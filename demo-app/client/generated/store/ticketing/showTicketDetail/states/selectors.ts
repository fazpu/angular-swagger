/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createSelector} from '@ngrx/store';
import {getShowTicketDetailState} from './reducers';

export const getShowTicketDetailStateData = createSelector(
  getShowTicketDetailState,
  state => state.data,
);

export const getShowTicketDetailStateError = createSelector(
  getShowTicketDetailState,
  state => state.error,
);

export const getShowTicketDetailStateLoading = createSelector(
  getShowTicketDetailState,
  state => state.loading,
);


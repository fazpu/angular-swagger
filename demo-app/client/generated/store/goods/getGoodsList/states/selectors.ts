/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createSelector} from '@ngrx/store';
import {getGetGoodsListState} from './reducers';

export const getGetGoodsListStateData = createSelector(
  getGetGoodsListState,
  state => state.data,
);

export const getGetGoodsListStateError = createSelector(
  getGetGoodsListState,
  state => state.error,
);

export const getGetGoodsListStateLoading = createSelector(
  getGetGoodsListState,
  state => state.loading,
);


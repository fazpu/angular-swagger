/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import {PutOrderAction, PutOrderActions} from './actions';

export interface PutOrderState {
  data: Record<string, unknown> | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialPutOrderState: PutOrderState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Order_PutOrder';
export const getPutOrderStateSelector = createFeatureSelector<PutOrderState>(selectorName);

export function PutOrderReducer(
  state: PutOrderState = initialPutOrderState,
  action: PutOrderAction): PutOrderState {
  switch (action.type) {
    case PutOrderActions.PUTORDER_START: return {...state, loading: true, error: null};
    case PutOrderActions.PUTORDER_SUCCESS: return {...state, data: action.payload, loading: false};
    case PutOrderActions.PUTORDER_ERROR: return {...state, error: action.payload, loading: false};
    case PutOrderActions.PUTORDER_CLEAN: return initialPutOrderState;
    default: return state;
  }
}

/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as actions from './actions';

export interface PatchOrderState {
  data: Record<string, unknown> | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialPatchOrderState: PatchOrderState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Order_PatchOrder';
export const getPatchOrderStateSelector = createFeatureSelector<PatchOrderState>(selectorName);

export function PatchOrderReducer(
  state: PatchOrderState = initialPatchOrderState,
  action: actions.PatchOrderAction): PatchOrderState {
  switch (action.type) {
    case actions.Actions.PATCHORDER_START: return {...state, loading: true, error: null};
    case actions.Actions.PATCHORDER_SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.PATCHORDER_ERROR: return {...state, error: action.payload, loading: false};
    case actions.Actions.PATCHORDER_CLEAN: return initialPatchOrderState;
    default: return state;
  }
}

/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import {DashedAction, DashedActions} from './actions';

export interface DashedState {
  data: void | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialDashedState: DashedState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Params_Dashed';
export const getDashedState = createFeatureSelector<DashedState>(selectorName);

export function DashedReducer(
  state: DashedState = initialDashedState,
  action: DashedAction): DashedState {

  switch (action.type) {
    case DashedActions.DASHED_START:
      return {...state, loading: true, error: null};

    case DashedActions.DASHED_SUCCESS:
      return {...state, data: action.payload, loading: false};

    case DashedActions.DASHED_ERROR:
      return {...state, error: action.payload, loading: false};

    case DashedActions.DASHED_CLEAN:
      return initialDashedState;

    default:
      return state;
  }
}

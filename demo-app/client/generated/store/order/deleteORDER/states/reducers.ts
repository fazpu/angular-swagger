/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import {DeleteORDERAction, DeleteORDERActions} from './actions';

export interface DeleteORDERState {
  data: Record<string, unknown> | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialDeleteORDERState: DeleteORDERState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Order_DeleteORDER';
export const getDeleteORDERStateSelector = createFeatureSelector<DeleteORDERState>(selectorName);

export function DeleteORDERReducer(
  state: DeleteORDERState = initialDeleteORDERState,
  action: DeleteORDERAction): DeleteORDERState {
  switch (action.type) {
    case DeleteORDERActions.DELETEORDER_START: return {...state, loading: true, error: null};
    case DeleteORDERActions.DELETEORDER_SUCCESS: return {...state, data: action.payload, loading: false};
    case DeleteORDERActions.DELETEORDER_ERROR: return {...state, error: action.payload, loading: false};
    case DeleteORDERActions.DELETEORDER_CLEAN: return initialDeleteORDERState;
    default: return state;
  }
}

/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as __model from '../../../../model';
import {RestAuthUserPartialUpdateAction, RestAuthUserPartialUpdateActions} from './actions';

export interface RestAuthUserPartialUpdateState {
  data: __model.UserDetails | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialRestAuthUserPartialUpdateState: RestAuthUserPartialUpdateState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'RestAuth_RestAuthUserPartialUpdate';
export const getRestAuthUserPartialUpdateStateSelector = createFeatureSelector<RestAuthUserPartialUpdateState>(selectorName);

export function RestAuthUserPartialUpdateReducer(
  state: RestAuthUserPartialUpdateState = initialRestAuthUserPartialUpdateState,
  action: RestAuthUserPartialUpdateAction): RestAuthUserPartialUpdateState {

  switch (action.type) {
    case RestAuthUserPartialUpdateActions.REST_AUTH_USER_PARTIAL_UPDATE_START:
      return {...state, loading: true, error: null};

    case RestAuthUserPartialUpdateActions.REST_AUTH_USER_PARTIAL_UPDATE_SUCCESS:
      return {...state, data: action.payload, loading: false};

    case RestAuthUserPartialUpdateActions.REST_AUTH_USER_PARTIAL_UPDATE_ERROR:
      return {...state, error: action.payload, loading: false};

    case RestAuthUserPartialUpdateActions.REST_AUTH_USER_PARTIAL_UPDATE_CLEAN:
      return initialRestAuthUserPartialUpdateState;

    default:
      return state;
  }
}

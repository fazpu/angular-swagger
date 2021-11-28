/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as __model from '../../../../model';
import {RestAuthUserUpdateAction, RestAuthUserUpdateActions} from './actions';

export interface RestAuthUserUpdateState {
  data: __model.UserDetails | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialRestAuthUserUpdateState: RestAuthUserUpdateState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'RestAuth_RestAuthUserUpdate';
export const getRestAuthUserUpdateStateSelector = createFeatureSelector<RestAuthUserUpdateState>(selectorName);

export function RestAuthUserUpdateReducer(
  state: RestAuthUserUpdateState = initialRestAuthUserUpdateState,
  action: RestAuthUserUpdateAction): RestAuthUserUpdateState {

  switch (action.type) {
    case RestAuthUserUpdateActions.REST_AUTH_USER_UPDATE_START:
      return {...state, loading: true, error: null};

    case RestAuthUserUpdateActions.REST_AUTH_USER_UPDATE_SUCCESS:
      return {...state, data: action.payload, loading: false};

    case RestAuthUserUpdateActions.REST_AUTH_USER_UPDATE_ERROR:
      return {...state, error: action.payload, loading: false};

    case RestAuthUserUpdateActions.REST_AUTH_USER_UPDATE_CLEAN:
      return initialRestAuthUserUpdateState;

    default:
      return state;
  }
}

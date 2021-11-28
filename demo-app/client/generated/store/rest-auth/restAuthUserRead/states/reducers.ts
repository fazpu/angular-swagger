/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as __model from '../../../../model';
import {RestAuthUserReadAction, RestAuthUserReadActions} from './actions';

export interface RestAuthUserReadState {
  data: __model.UserDetails | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialRestAuthUserReadState: RestAuthUserReadState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'RestAuth_RestAuthUserRead';
export const getRestAuthUserReadStateSelector = createFeatureSelector<RestAuthUserReadState>(selectorName);

export function RestAuthUserReadReducer(
  state: RestAuthUserReadState = initialRestAuthUserReadState,
  action: RestAuthUserReadAction): RestAuthUserReadState {

  switch (action.type) {
    case RestAuthUserReadActions.REST_AUTH_USER_READ_START:
      return {...state, loading: true, error: null};

    case RestAuthUserReadActions.REST_AUTH_USER_READ_SUCCESS:
      return {...state, data: action.payload, loading: false};

    case RestAuthUserReadActions.REST_AUTH_USER_READ_ERROR:
      return {...state, error: action.payload, loading: false};

    case RestAuthUserReadActions.REST_AUTH_USER_READ_CLEAN:
      return initialRestAuthUserReadState;

    default:
      return state;
  }
}

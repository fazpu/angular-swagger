/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import {RestAuthLogoutListAction, RestAuthLogoutListActions} from './actions';

export interface RestAuthLogoutListState {
  data: void | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialRestAuthLogoutListState: RestAuthLogoutListState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'RestAuth_RestAuthLogoutList';
export const getRestAuthLogoutListStateSelector = createFeatureSelector<RestAuthLogoutListState>(selectorName);

export function RestAuthLogoutListReducer(
  state: RestAuthLogoutListState = initialRestAuthLogoutListState,
  action: RestAuthLogoutListAction): RestAuthLogoutListState {

  switch (action.type) {
    case RestAuthLogoutListActions.REST_AUTH_LOGOUT_LIST_START:
      return {...state, loading: true, error: null};

    case RestAuthLogoutListActions.REST_AUTH_LOGOUT_LIST_SUCCESS:
      return {...state, data: action.payload, loading: false};

    case RestAuthLogoutListActions.REST_AUTH_LOGOUT_LIST_ERROR:
      return {...state, error: action.payload, loading: false};

    case RestAuthLogoutListActions.REST_AUTH_LOGOUT_LIST_CLEAN:
      return initialRestAuthLogoutListState;

    default:
      return state;
  }
}

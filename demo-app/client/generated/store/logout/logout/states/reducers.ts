/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as actions from './actions';

export interface LogoutState {
  data: object | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialLogoutState: LogoutState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Logout_Logout';
export const getLogoutStateSelector = createFeatureSelector<LogoutState>(selectorName);

export function LogoutReducer(
  state: LogoutState = initialLogoutState,
  action: actions.LogoutAction): LogoutState {
  switch (action.type) {
    case actions.Actions.LOGOUT_START: return {...state, loading: true, error: null};
    case actions.Actions.LOGOUT_SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.LOGOUT_ERROR: return {...state, error: action.payload, loading: false};
    case actions.Actions.LOGOUT_CLEAN: return initialLogoutState;
    default: return state;
  }
}

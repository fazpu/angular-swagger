/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import {LogoutAction, LogoutActions} from './actions';

export interface LogoutState {
  data: Record<string, unknown> | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialLogoutState: LogoutState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Logout_Logout';
export const getLogoutState = createFeatureSelector<LogoutState>(selectorName);

export function LogoutReducer(
  state: LogoutState = initialLogoutState,
  action: LogoutAction): LogoutState {

  switch (action.type) {
    case LogoutActions.LOGOUT_START:
      return {...state, loading: true, error: null};

    case LogoutActions.LOGOUT_SUCCESS:
      return {...state, data: action.payload, loading: false};

    case LogoutActions.LOGOUT_ERROR:
      return {...state, error: action.payload, loading: false};

    case LogoutActions.LOGOUT_CLEAN:
      return initialLogoutState;

    default:
      return state;
  }
}

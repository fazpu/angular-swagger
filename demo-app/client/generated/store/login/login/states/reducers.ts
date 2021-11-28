/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import {LoginAction, LoginActions} from './actions';

export interface LoginState {
  data: Record<string, unknown> | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialLoginState: LoginState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Login_Login';
export const getLoginStateSelector = createFeatureSelector<LoginState>(selectorName);

export function LoginReducer(
  state: LoginState = initialLoginState,
  action: LoginAction): LoginState {

  switch (action.type) {
    case LoginActions.LOGIN_START:
      return {...state, loading: true, error: null};

    case LoginActions.LOGIN_SUCCESS:
      return {...state, data: action.payload, loading: false};

    case LoginActions.LOGIN_ERROR:
      return {...state, error: action.payload, loading: false};

    case LoginActions.LOGIN_CLEAN:
      return initialLoginState;

    default:
      return state;
  }
}

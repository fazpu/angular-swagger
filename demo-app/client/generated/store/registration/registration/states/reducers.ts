/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import {RegistrationAction, RegistrationActions} from './actions';

export interface RegistrationState {
  data: Record<string, unknown> | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialRegistrationState: RegistrationState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Registration_Registration';
export const getRegistrationStateSelector = createFeatureSelector<RegistrationState>(selectorName);

export function RegistrationReducer(
  state: RegistrationState = initialRegistrationState,
  action: RegistrationAction): RegistrationState {

  switch (action.type) {
    case RegistrationActions.REGISTRATION_START:
      return {...state, loading: true, error: null};

    case RegistrationActions.REGISTRATION_SUCCESS:
      return {...state, data: action.payload, loading: false};

    case RegistrationActions.REGISTRATION_ERROR:
      return {...state, error: action.payload, loading: false};

    case RegistrationActions.REGISTRATION_CLEAN:
      return initialRegistrationState;

    default:
      return state;
  }
}

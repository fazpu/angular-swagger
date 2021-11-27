/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {LoginParams} from '../../../../controllers/Login';

export enum LoginActions {
  LOGIN_START = '[Login login] Start',
  LOGIN_SUCCESS = '[Login login] Success',
  LOGIN_ERROR = '[Login login] Error',
  LOGIN_CLEAN = '[Login login] Clean',
}

export class LoginStart implements Action {
  readonly type = LoginActions.LOGIN_START;
  constructor(public payload: LoginParams) {}
}

export class LoginSuccess implements Action {
  readonly type = LoginActions.LOGIN_SUCCESS;
  constructor(public payload: Record<string, unknown>) {}
}

export class LoginError implements Action {
  readonly type = LoginActions.LOGIN_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class LoginClean implements Action {
  readonly type = LoginActions.LOGIN_CLEAN;
}

export type LoginAction = LoginStart |
LoginSuccess |
LoginError |
LoginClean;

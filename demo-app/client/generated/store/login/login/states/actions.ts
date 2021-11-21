/* eslint-disable max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {LoginParams} from '../../../../controllers/Login';

export enum Actions {
  LOGIN_START = '[Login login] Start',
  LOGIN_SUCCESS = '[Login login] Success',
  LOGIN_ERROR = '[Login login] Error',
  LOGIN_CLEAN = '[Login login] Clean',
}

export class LoginStart implements Action {
  readonly type = Actions.LOGIN_START;
  constructor(public payload: LoginParams) {}
}

export class LoginSuccess implements Action {
  readonly type = Actions.LOGIN_SUCCESS;
  constructor(public payload: object) {}
}

export class LoginError implements Action {
  readonly type = Actions.LOGIN_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class LoginClean implements Action {
  readonly type = Actions.LOGIN_CLEAN;
}

export type LoginAction = LoginStart |
LoginSuccess |
LoginError |
LoginClean;

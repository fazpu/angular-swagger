/* eslint-disable max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';

export enum Actions {
  LOGOUT_START = '[Logout logout] Start',
  LOGOUT_SUCCESS = '[Logout logout] Success',
  LOGOUT_ERROR = '[Logout logout] Error',
  LOGOUT_CLEAN = '[Logout logout] Clean',
}

export class LogoutStart implements Action {
  readonly type = Actions.LOGOUT_START;
  constructor() {}
}

export class LogoutSuccess implements Action {
  readonly type = Actions.LOGOUT_SUCCESS;
  constructor(public payload: object) {}
}

export class LogoutError implements Action {
  readonly type = Actions.LOGOUT_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class LogoutClean implements Action {
  readonly type = Actions.LOGOUT_CLEAN;
}

export type LogoutAction = LogoutStart |
LogoutSuccess |
LogoutError |
LogoutClean;

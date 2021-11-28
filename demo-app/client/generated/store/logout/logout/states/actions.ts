/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';

export enum LogoutActions {
  LOGOUT_START = '[Logout logout] Start',
  LOGOUT_SUCCESS = '[Logout logout] Success',
  LOGOUT_ERROR = '[Logout logout] Error',
  LOGOUT_CLEAN = '[Logout logout] Clean',
}

export class LogoutStart implements Action {
  public readonly type = LogoutActions.LOGOUT_START;
  constructor() {}
}

export class LogoutSuccess implements Action {
  public readonly type = LogoutActions.LOGOUT_SUCCESS;
  constructor(public payload: Record<string, unknown>) {}
}

export class LogoutError implements Action {
  public readonly type = LogoutActions.LOGOUT_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class LogoutClean implements Action {
  public readonly type = LogoutActions.LOGOUT_CLEAN;
}

export type LogoutAction = LogoutStart |
LogoutSuccess |
LogoutError |
LogoutClean;

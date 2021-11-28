/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';

export enum RestAuthLogoutCreateActions {
  REST_AUTH_LOGOUT_CREATE_START = '[RestAuth restAuthLogoutCreate] Start',
  REST_AUTH_LOGOUT_CREATE_SUCCESS = '[RestAuth restAuthLogoutCreate] Success',
  REST_AUTH_LOGOUT_CREATE_ERROR = '[RestAuth restAuthLogoutCreate] Error',
  REST_AUTH_LOGOUT_CREATE_CLEAN = '[RestAuth restAuthLogoutCreate] Clean',
}

export class RestAuthLogoutCreateStart implements Action {
  public readonly type = RestAuthLogoutCreateActions.REST_AUTH_LOGOUT_CREATE_START;
  constructor() {}
}

export class RestAuthLogoutCreateSuccess implements Action {
  public readonly type = RestAuthLogoutCreateActions.REST_AUTH_LOGOUT_CREATE_SUCCESS;
  constructor(public payload: void) {}
}

export class RestAuthLogoutCreateError implements Action {
  public readonly type = RestAuthLogoutCreateActions.REST_AUTH_LOGOUT_CREATE_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class RestAuthLogoutCreateClean implements Action {
  public readonly type = RestAuthLogoutCreateActions.REST_AUTH_LOGOUT_CREATE_CLEAN;
}

export type RestAuthLogoutCreateAction = RestAuthLogoutCreateStart |
RestAuthLogoutCreateSuccess |
RestAuthLogoutCreateError |
RestAuthLogoutCreateClean;

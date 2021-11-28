/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import * as __model from '../../../../model';

export enum RestAuthUserReadActions {
  REST_AUTH_USER_READ_START = '[RestAuth restAuthUserRead] Start',
  REST_AUTH_USER_READ_SUCCESS = '[RestAuth restAuthUserRead] Success',
  REST_AUTH_USER_READ_ERROR = '[RestAuth restAuthUserRead] Error',
  REST_AUTH_USER_READ_CLEAN = '[RestAuth restAuthUserRead] Clean',
}

export class RestAuthUserReadStart implements Action {
  public readonly type = RestAuthUserReadActions.REST_AUTH_USER_READ_START;
  constructor() {}
}

export class RestAuthUserReadSuccess implements Action {
  public readonly type = RestAuthUserReadActions.REST_AUTH_USER_READ_SUCCESS;
  constructor(public payload: __model.UserDetails) {}
}

export class RestAuthUserReadError implements Action {
  public readonly type = RestAuthUserReadActions.REST_AUTH_USER_READ_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class RestAuthUserReadClean implements Action {
  public readonly type = RestAuthUserReadActions.REST_AUTH_USER_READ_CLEAN;
}

export type RestAuthUserReadAction = RestAuthUserReadStart |
RestAuthUserReadSuccess |
RestAuthUserReadError |
RestAuthUserReadClean;

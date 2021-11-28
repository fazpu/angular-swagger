/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {RestAuthUserUpdateParams} from '../../../../controllers/RestAuth';
import * as __model from '../../../../model';

export enum RestAuthUserUpdateActions {
  REST_AUTH_USER_UPDATE_START = '[RestAuth restAuthUserUpdate] Start',
  REST_AUTH_USER_UPDATE_SUCCESS = '[RestAuth restAuthUserUpdate] Success',
  REST_AUTH_USER_UPDATE_ERROR = '[RestAuth restAuthUserUpdate] Error',
  REST_AUTH_USER_UPDATE_CLEAN = '[RestAuth restAuthUserUpdate] Clean',
}

export class RestAuthUserUpdateStart implements Action {
  public readonly type = RestAuthUserUpdateActions.REST_AUTH_USER_UPDATE_START;
  constructor(public payload: RestAuthUserUpdateParams) {}
}

export class RestAuthUserUpdateSuccess implements Action {
  public readonly type = RestAuthUserUpdateActions.REST_AUTH_USER_UPDATE_SUCCESS;
  constructor(public payload: __model.UserDetails) {}
}

export class RestAuthUserUpdateError implements Action {
  public readonly type = RestAuthUserUpdateActions.REST_AUTH_USER_UPDATE_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class RestAuthUserUpdateClean implements Action {
  public readonly type = RestAuthUserUpdateActions.REST_AUTH_USER_UPDATE_CLEAN;
}

export type RestAuthUserUpdateAction = RestAuthUserUpdateStart |
RestAuthUserUpdateSuccess |
RestAuthUserUpdateError |
RestAuthUserUpdateClean;

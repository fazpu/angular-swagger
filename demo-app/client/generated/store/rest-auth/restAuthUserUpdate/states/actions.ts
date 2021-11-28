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
  RESTAUTHUSERUPDATE_START = '[RestAuth restAuthUserUpdate] Start',
  RESTAUTHUSERUPDATE_SUCCESS = '[RestAuth restAuthUserUpdate] Success',
  RESTAUTHUSERUPDATE_ERROR = '[RestAuth restAuthUserUpdate] Error',
  RESTAUTHUSERUPDATE_CLEAN = '[RestAuth restAuthUserUpdate] Clean',
}

export class RestAuthUserUpdateStart implements Action {
  public readonly type = RestAuthUserUpdateActions.RESTAUTHUSERUPDATE_START;
  constructor(public payload: RestAuthUserUpdateParams) {}
}

export class RestAuthUserUpdateSuccess implements Action {
  public readonly type = RestAuthUserUpdateActions.RESTAUTHUSERUPDATE_SUCCESS;
  constructor(public payload: __model.UserDetails) {}
}

export class RestAuthUserUpdateError implements Action {
  public readonly type = RestAuthUserUpdateActions.RESTAUTHUSERUPDATE_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class RestAuthUserUpdateClean implements Action {
  public readonly type = RestAuthUserUpdateActions.RESTAUTHUSERUPDATE_CLEAN;
}

export type RestAuthUserUpdateAction = RestAuthUserUpdateStart |
RestAuthUserUpdateSuccess |
RestAuthUserUpdateError |
RestAuthUserUpdateClean;

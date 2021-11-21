/* eslint-disable max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {RestAuthUserUpdateParams} from '../../../../controllers/RestAuth';
import * as __model from '../../../../model';

export enum Actions {
  RESTAUTHUSERUPDATE_START = '[RestAuth restAuthUserUpdate] Start',
  RESTAUTHUSERUPDATE_SUCCESS = '[RestAuth restAuthUserUpdate] Success',
  RESTAUTHUSERUPDATE_ERROR = '[RestAuth restAuthUserUpdate] Error',
  RESTAUTHUSERUPDATE_CLEAN = '[RestAuth restAuthUserUpdate] Clean',
}

export class RestAuthUserUpdateStart implements Action {
  readonly type = Actions.RESTAUTHUSERUPDATE_START;
  constructor(public payload: RestAuthUserUpdateParams) {}
}

export class RestAuthUserUpdateSuccess implements Action {
  readonly type = Actions.RESTAUTHUSERUPDATE_SUCCESS;
  constructor(public payload: __model.UserDetails) {}
}

export class RestAuthUserUpdateError implements Action {
  readonly type = Actions.RESTAUTHUSERUPDATE_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class RestAuthUserUpdateClean implements Action {
  readonly type = Actions.RESTAUTHUSERUPDATE_CLEAN;
}

export type RestAuthUserUpdateAction = RestAuthUserUpdateStart |
RestAuthUserUpdateSuccess |
RestAuthUserUpdateError |
RestAuthUserUpdateClean;

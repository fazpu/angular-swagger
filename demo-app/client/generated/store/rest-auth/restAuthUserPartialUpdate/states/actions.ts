/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {RestAuthUserPartialUpdateParams} from '../../../../controllers/RestAuth';
import * as __model from '../../../../model';

export enum RestAuthUserPartialUpdateActions {
  RESTAUTHUSERPARTIALUPDATE_START = '[RestAuth restAuthUserPartialUpdate] Start',
  RESTAUTHUSERPARTIALUPDATE_SUCCESS = '[RestAuth restAuthUserPartialUpdate] Success',
  RESTAUTHUSERPARTIALUPDATE_ERROR = '[RestAuth restAuthUserPartialUpdate] Error',
  RESTAUTHUSERPARTIALUPDATE_CLEAN = '[RestAuth restAuthUserPartialUpdate] Clean',
}

export class RestAuthUserPartialUpdateStart implements Action {
  public readonly type = RestAuthUserPartialUpdateActions.RESTAUTHUSERPARTIALUPDATE_START;
  constructor(public payload: RestAuthUserPartialUpdateParams) {}
}

export class RestAuthUserPartialUpdateSuccess implements Action {
  public readonly type = RestAuthUserPartialUpdateActions.RESTAUTHUSERPARTIALUPDATE_SUCCESS;
  constructor(public payload: __model.UserDetails) {}
}

export class RestAuthUserPartialUpdateError implements Action {
  public readonly type = RestAuthUserPartialUpdateActions.RESTAUTHUSERPARTIALUPDATE_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class RestAuthUserPartialUpdateClean implements Action {
  public readonly type = RestAuthUserPartialUpdateActions.RESTAUTHUSERPARTIALUPDATE_CLEAN;
}

export type RestAuthUserPartialUpdateAction = RestAuthUserPartialUpdateStart |
RestAuthUserPartialUpdateSuccess |
RestAuthUserPartialUpdateError |
RestAuthUserPartialUpdateClean;

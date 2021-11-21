/* eslint-disable max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import * as __model from '../../../../model';

export enum Actions {
  RESTAUTHUSERREAD_START = '[RestAuth restAuthUserRead] Start',
  RESTAUTHUSERREAD_SUCCESS = '[RestAuth restAuthUserRead] Success',
  RESTAUTHUSERREAD_ERROR = '[RestAuth restAuthUserRead] Error',
  RESTAUTHUSERREAD_CLEAN = '[RestAuth restAuthUserRead] Clean',
}

export class RestAuthUserReadStart implements Action {
  readonly type = Actions.RESTAUTHUSERREAD_START;
  constructor() {}
}

export class RestAuthUserReadSuccess implements Action {
  readonly type = Actions.RESTAUTHUSERREAD_SUCCESS;
  constructor(public payload: __model.UserDetails) {}
}

export class RestAuthUserReadError implements Action {
  readonly type = Actions.RESTAUTHUSERREAD_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class RestAuthUserReadClean implements Action {
  readonly type = Actions.RESTAUTHUSERREAD_CLEAN;
}

export type RestAuthUserReadAction = RestAuthUserReadStart |
RestAuthUserReadSuccess |
RestAuthUserReadError |
RestAuthUserReadClean;

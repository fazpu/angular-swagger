/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';

export enum RestAuthLogoutCreateActions {
  RESTAUTHLOGOUTCREATE_START = '[RestAuth restAuthLogoutCreate] Start',
  RESTAUTHLOGOUTCREATE_SUCCESS = '[RestAuth restAuthLogoutCreate] Success',
  RESTAUTHLOGOUTCREATE_ERROR = '[RestAuth restAuthLogoutCreate] Error',
  RESTAUTHLOGOUTCREATE_CLEAN = '[RestAuth restAuthLogoutCreate] Clean',
}

export class RestAuthLogoutCreateStart implements Action {
  public readonly type = RestAuthLogoutCreateActions.RESTAUTHLOGOUTCREATE_START;
  constructor() {}
}

export class RestAuthLogoutCreateSuccess implements Action {
  public readonly type = RestAuthLogoutCreateActions.RESTAUTHLOGOUTCREATE_SUCCESS;
  constructor(public payload: void) {}
}

export class RestAuthLogoutCreateError implements Action {
  public readonly type = RestAuthLogoutCreateActions.RESTAUTHLOGOUTCREATE_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class RestAuthLogoutCreateClean implements Action {
  public readonly type = RestAuthLogoutCreateActions.RESTAUTHLOGOUTCREATE_CLEAN;
}

export type RestAuthLogoutCreateAction = RestAuthLogoutCreateStart |
RestAuthLogoutCreateSuccess |
RestAuthLogoutCreateError |
RestAuthLogoutCreateClean;

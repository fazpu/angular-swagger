/* eslint-disable max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';

export enum Actions {
  RESTAUTHLOGOUTCREATE_START = '[RestAuth restAuthLogoutCreate] Start',
  RESTAUTHLOGOUTCREATE_SUCCESS = '[RestAuth restAuthLogoutCreate] Success',
  RESTAUTHLOGOUTCREATE_ERROR = '[RestAuth restAuthLogoutCreate] Error',
  RESTAUTHLOGOUTCREATE_CLEAN = '[RestAuth restAuthLogoutCreate] Clean',
}

export class RestAuthLogoutCreateStart implements Action {
  readonly type = Actions.RESTAUTHLOGOUTCREATE_START;
  constructor() {}
}

export class RestAuthLogoutCreateSuccess implements Action {
  readonly type = Actions.RESTAUTHLOGOUTCREATE_SUCCESS;
  constructor(public payload: void) {}
}

export class RestAuthLogoutCreateError implements Action {
  readonly type = Actions.RESTAUTHLOGOUTCREATE_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class RestAuthLogoutCreateClean implements Action {
  readonly type = Actions.RESTAUTHLOGOUTCREATE_CLEAN;
}

export type RestAuthLogoutCreateAction = RestAuthLogoutCreateStart |
RestAuthLogoutCreateSuccess |
RestAuthLogoutCreateError |
RestAuthLogoutCreateClean;

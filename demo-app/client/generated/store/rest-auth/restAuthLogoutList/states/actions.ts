/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';

export enum RestAuthLogoutListActions {
  RESTAUTHLOGOUTLIST_START = '[RestAuth restAuthLogoutList] Start',
  RESTAUTHLOGOUTLIST_SUCCESS = '[RestAuth restAuthLogoutList] Success',
  RESTAUTHLOGOUTLIST_ERROR = '[RestAuth restAuthLogoutList] Error',
  RESTAUTHLOGOUTLIST_CLEAN = '[RestAuth restAuthLogoutList] Clean',
}

export class RestAuthLogoutListStart implements Action {
  readonly type = RestAuthLogoutListActions.RESTAUTHLOGOUTLIST_START;
  constructor() {}
}

export class RestAuthLogoutListSuccess implements Action {
  readonly type = RestAuthLogoutListActions.RESTAUTHLOGOUTLIST_SUCCESS;
  constructor(public payload: void) {}
}

export class RestAuthLogoutListError implements Action {
  readonly type = RestAuthLogoutListActions.RESTAUTHLOGOUTLIST_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class RestAuthLogoutListClean implements Action {
  readonly type = RestAuthLogoutListActions.RESTAUTHLOGOUTLIST_CLEAN;
}

export type RestAuthLogoutListAction = RestAuthLogoutListStart |
RestAuthLogoutListSuccess |
RestAuthLogoutListError |
RestAuthLogoutListClean;

/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';

export enum RestAuthLogoutListActions {
  REST_AUTH_LOGOUT_LIST_START = '[RestAuth restAuthLogoutList] Start',
  REST_AUTH_LOGOUT_LIST_SUCCESS = '[RestAuth restAuthLogoutList] Success',
  REST_AUTH_LOGOUT_LIST_ERROR = '[RestAuth restAuthLogoutList] Error',
  REST_AUTH_LOGOUT_LIST_CLEAN = '[RestAuth restAuthLogoutList] Clean',
}

export class RestAuthLogoutListStart implements Action {
  public readonly type = RestAuthLogoutListActions.REST_AUTH_LOGOUT_LIST_START;
  constructor() {}
}

export class RestAuthLogoutListSuccess implements Action {
  public readonly type = RestAuthLogoutListActions.REST_AUTH_LOGOUT_LIST_SUCCESS;
  constructor(public payload: void) {}
}

export class RestAuthLogoutListError implements Action {
  public readonly type = RestAuthLogoutListActions.REST_AUTH_LOGOUT_LIST_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class RestAuthLogoutListClean implements Action {
  public readonly type = RestAuthLogoutListActions.REST_AUTH_LOGOUT_LIST_CLEAN;
}

export type RestAuthLogoutListAction = RestAuthLogoutListStart |
RestAuthLogoutListSuccess |
RestAuthLogoutListError |
RestAuthLogoutListClean;

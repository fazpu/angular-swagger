/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {DeleteORDERParams} from '../../../../controllers/Order';

export enum DeleteORDERActions {
  DELETE_ORDER_START = '[Order deleteORDER] Start',
  DELETE_ORDER_SUCCESS = '[Order deleteORDER] Success',
  DELETE_ORDER_ERROR = '[Order deleteORDER] Error',
  DELETE_ORDER_CLEAN = '[Order deleteORDER] Clean',
}

export class DeleteORDERStart implements Action {
  public readonly type = DeleteORDERActions.DELETE_ORDER_START;
  constructor(public payload: DeleteORDERParams) {}
}

export class DeleteORDERSuccess implements Action {
  public readonly type = DeleteORDERActions.DELETE_ORDER_SUCCESS;
  constructor(public payload: Record<string, unknown>) {}
}

export class DeleteORDERError implements Action {
  public readonly type = DeleteORDERActions.DELETE_ORDER_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class DeleteORDERClean implements Action {
  public readonly type = DeleteORDERActions.DELETE_ORDER_CLEAN;
}

export type DeleteORDERAction = DeleteORDERStart |
DeleteORDERSuccess |
DeleteORDERError |
DeleteORDERClean;

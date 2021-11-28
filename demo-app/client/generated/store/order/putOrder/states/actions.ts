/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {PutOrderParams} from '../../../../controllers/Order';

export enum PutOrderActions {
  PUT_ORDER_START = '[Order putOrder] Start',
  PUT_ORDER_SUCCESS = '[Order putOrder] Success',
  PUT_ORDER_ERROR = '[Order putOrder] Error',
  PUT_ORDER_CLEAN = '[Order putOrder] Clean',
}

export class PutOrderStart implements Action {
  public readonly type = PutOrderActions.PUT_ORDER_START;
  constructor(public payload: PutOrderParams) {}
}

export class PutOrderSuccess implements Action {
  public readonly type = PutOrderActions.PUT_ORDER_SUCCESS;
  constructor(public payload: Record<string, unknown>) {}
}

export class PutOrderError implements Action {
  public readonly type = PutOrderActions.PUT_ORDER_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class PutOrderClean implements Action {
  public readonly type = PutOrderActions.PUT_ORDER_CLEAN;
}

export type PutOrderAction = PutOrderStart |
PutOrderSuccess |
PutOrderError |
PutOrderClean;

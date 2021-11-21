/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {OrderParams} from '../../../../controllers/Order';

export enum Actions {
  ORDER_START = '[Order order] Start',
  ORDER_SUCCESS = '[Order order] Success',
  ORDER_ERROR = '[Order order] Error',
  ORDER_CLEAN = '[Order order] Clean',
}

export class OrderStart implements Action {
  readonly type = Actions.ORDER_START;
  constructor(public payload: OrderParams) {}
}

export class OrderSuccess implements Action {
  readonly type = Actions.ORDER_SUCCESS;
  constructor(public payload: Record<string, unknown>) {}
}

export class OrderError implements Action {
  readonly type = Actions.ORDER_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class OrderClean implements Action {
  readonly type = Actions.ORDER_CLEAN;
}

export type OrderAction = OrderStart |
OrderSuccess |
OrderError |
OrderClean;

/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {PutOrderParams} from '../../../../controllers/Order';

export enum Actions {
  PUTORDER_START = '[Order putOrder] Start',
  PUTORDER_SUCCESS = '[Order putOrder] Success',
  PUTORDER_ERROR = '[Order putOrder] Error',
  PUTORDER_CLEAN = '[Order putOrder] Clean',
}

export class PutOrderStart implements Action {
  readonly type = Actions.PUTORDER_START;
  constructor(public payload: PutOrderParams) {}
}

export class PutOrderSuccess implements Action {
  readonly type = Actions.PUTORDER_SUCCESS;
  constructor(public payload: Record<string, unknown>) {}
}

export class PutOrderError implements Action {
  readonly type = Actions.PUTORDER_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class PutOrderClean implements Action {
  readonly type = Actions.PUTORDER_CLEAN;
}

export type PutOrderAction = PutOrderStart |
PutOrderSuccess |
PutOrderError |
PutOrderClean;

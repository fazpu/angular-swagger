/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {PatchOrderParams} from '../../../../controllers/Order';

export enum PatchOrderActions {
  PATCH_ORDER_START = '[Order patchOrder] Start',
  PATCH_ORDER_SUCCESS = '[Order patchOrder] Success',
  PATCH_ORDER_ERROR = '[Order patchOrder] Error',
  PATCH_ORDER_CLEAN = '[Order patchOrder] Clean',
}

export class PatchOrderStart implements Action {
  public readonly type = PatchOrderActions.PATCH_ORDER_START;
  constructor(public payload: PatchOrderParams) {}
}

export class PatchOrderSuccess implements Action {
  public readonly type = PatchOrderActions.PATCH_ORDER_SUCCESS;
  constructor(public payload: Record<string, unknown>) {}
}

export class PatchOrderError implements Action {
  public readonly type = PatchOrderActions.PATCH_ORDER_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class PatchOrderClean implements Action {
  public readonly type = PatchOrderActions.PATCH_ORDER_CLEAN;
}

export type PatchOrderAction = PatchOrderStart |
PatchOrderSuccess |
PatchOrderError |
PatchOrderClean;

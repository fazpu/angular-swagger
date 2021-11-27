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
  PATCHORDER_START = '[Order patchOrder] Start',
  PATCHORDER_SUCCESS = '[Order patchOrder] Success',
  PATCHORDER_ERROR = '[Order patchOrder] Error',
  PATCHORDER_CLEAN = '[Order patchOrder] Clean',
}

export class PatchOrderStart implements Action {
  readonly type = PatchOrderActions.PATCHORDER_START;
  constructor(public payload: PatchOrderParams) {}
}

export class PatchOrderSuccess implements Action {
  readonly type = PatchOrderActions.PATCHORDER_SUCCESS;
  constructor(public payload: Record<string, unknown>) {}
}

export class PatchOrderError implements Action {
  readonly type = PatchOrderActions.PATCHORDER_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class PatchOrderClean implements Action {
  readonly type = PatchOrderActions.PATCHORDER_CLEAN;
}

export type PatchOrderAction = PatchOrderStart |
PatchOrderSuccess |
PatchOrderError |
PatchOrderClean;

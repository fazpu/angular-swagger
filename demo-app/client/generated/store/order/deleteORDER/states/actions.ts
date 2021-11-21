/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {DeleteORDERParams} from '../../../../controllers/Order';

export enum Actions {
  DELETEORDER_START = '[Order deleteORDER] Start',
  DELETEORDER_SUCCESS = '[Order deleteORDER] Success',
  DELETEORDER_ERROR = '[Order deleteORDER] Error',
  DELETEORDER_CLEAN = '[Order deleteORDER] Clean',
}

export class DeleteORDERStart implements Action {
  readonly type = Actions.DELETEORDER_START;
  constructor(public payload: DeleteORDERParams) {}
}

export class DeleteORDERSuccess implements Action {
  readonly type = Actions.DELETEORDER_SUCCESS;
  constructor(public payload: Record<string, unknown>) {}
}

export class DeleteORDERError implements Action {
  readonly type = Actions.DELETEORDER_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class DeleteORDERClean implements Action {
  readonly type = Actions.DELETEORDER_CLEAN;
}

export type DeleteORDERAction = DeleteORDERStart |
DeleteORDERSuccess |
DeleteORDERError |
DeleteORDERClean;

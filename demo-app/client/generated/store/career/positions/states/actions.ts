/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {PositionsParams} from '../../../../controllers/Career';

export enum PositionsActions {
  POSITIONS_START = '[Career positions] Start',
  POSITIONS_SUCCESS = '[Career positions] Success',
  POSITIONS_ERROR = '[Career positions] Error',
  POSITIONS_CLEAN = '[Career positions] Clean',
}

export class PositionsStart implements Action {
  public readonly type = PositionsActions.POSITIONS_START;
  constructor(public payload: PositionsParams) {}
}

export class PositionsSuccess implements Action {
  public readonly type = PositionsActions.POSITIONS_SUCCESS;
  constructor(public payload: Record<string, unknown>) {}
}

export class PositionsError implements Action {
  public readonly type = PositionsActions.POSITIONS_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class PositionsClean implements Action {
  public readonly type = PositionsActions.POSITIONS_CLEAN;
}

export type PositionsAction = PositionsStart |
PositionsSuccess |
PositionsError |
PositionsClean;

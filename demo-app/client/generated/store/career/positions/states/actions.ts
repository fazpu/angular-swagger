/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {PositionsParams} from '../../../../controllers/Career';

export enum Actions {
  POSITIONS_START = '[Career positions] Start',
  POSITIONS_SUCCESS = '[Career positions] Success',
  POSITIONS_ERROR = '[Career positions] Error',
  POSITIONS_CLEAN = '[Career positions] Clean',
}

export class PositionsStart implements Action {
  readonly type = Actions.POSITIONS_START;
  constructor(public payload: PositionsParams) {}
}

export class PositionsSuccess implements Action {
  readonly type = Actions.POSITIONS_SUCCESS;
  constructor(public payload: object) {}
}

export class PositionsError implements Action {
  readonly type = Actions.POSITIONS_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class PositionsClean implements Action {
  readonly type = Actions.POSITIONS_CLEAN;
}

export type PositionsAction = PositionsStart |
PositionsSuccess |
PositionsError |
PositionsClean;

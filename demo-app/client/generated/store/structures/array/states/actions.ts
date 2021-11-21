/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {ArrayParams} from '../../../../controllers/Structures';
import * as __model from '../../../../model';

export enum Actions {
  ARRAY_START = '[Structures array] Start',
  ARRAY_SUCCESS = '[Structures array] Success',
  ARRAY_ERROR = '[Structures array] Error',
  ARRAY_CLEAN = '[Structures array] Clean',
}

export class ArrayStart implements Action {
  readonly type = Actions.ARRAY_START;
  constructor(public payload: ArrayParams) {}
}

export class ArraySuccess implements Action {
  readonly type = Actions.ARRAY_SUCCESS;
  constructor(public payload: __model.ArrayGeneratedInlineModel) {}
}

export class ArrayError implements Action {
  readonly type = Actions.ARRAY_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class ArrayClean implements Action {
  readonly type = Actions.ARRAY_CLEAN;
}

export type ArrayAction = ArrayStart |
ArraySuccess |
ArrayError |
ArrayClean;

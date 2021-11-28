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

export enum ArrayActions {
  ARRAY_START = '[Structures array] Start',
  ARRAY_SUCCESS = '[Structures array] Success',
  ARRAY_ERROR = '[Structures array] Error',
  ARRAY_CLEAN = '[Structures array] Clean',
}

export class ArrayStart implements Action {
  public readonly type = ArrayActions.ARRAY_START;
  constructor(public payload: ArrayParams) {}
}

export class ArraySuccess implements Action {
  public readonly type = ArrayActions.ARRAY_SUCCESS;
  constructor(public payload: __model.ArrayGeneratedInlineModel) {}
}

export class ArrayError implements Action {
  public readonly type = ArrayActions.ARRAY_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class ArrayClean implements Action {
  public readonly type = ArrayActions.ARRAY_CLEAN;
}

export type ArrayAction = ArrayStart |
ArraySuccess |
ArrayError |
ArrayClean;

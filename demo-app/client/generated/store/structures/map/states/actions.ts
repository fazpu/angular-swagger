/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {MapParams} from '../../../../controllers/Structures';

export enum Actions {
  MAP_START = '[Structures map] Start',
  MAP_SUCCESS = '[Structures map] Success',
  MAP_ERROR = '[Structures map] Error',
  MAP_CLEAN = '[Structures map] Clean',
}

export class MapStart implements Action {
  readonly type = Actions.MAP_START;
  constructor(public payload: MapParams) {}
}

export class MapSuccess implements Action {
  readonly type = Actions.MAP_SUCCESS;
  constructor(public payload: void) {}
}

export class MapError implements Action {
  readonly type = Actions.MAP_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class MapClean implements Action {
  readonly type = Actions.MAP_CLEAN;
}

export type MapAction = MapStart |
MapSuccess |
MapError |
MapClean;

/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {MapParams} from '../../../../controllers/Structures';

export enum MapActions {
  MAP_START = '[Structures map] Start',
  MAP_SUCCESS = '[Structures map] Success',
  MAP_ERROR = '[Structures map] Error',
  MAP_CLEAN = '[Structures map] Clean',
}

export class MapStart implements Action {
  public readonly type = MapActions.MAP_START;
  constructor(public payload: MapParams) {}
}

export class MapSuccess implements Action {
  public readonly type = MapActions.MAP_SUCCESS;
  constructor(public payload: void) {}
}

export class MapError implements Action {
  public readonly type = MapActions.MAP_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class MapClean implements Action {
  public readonly type = MapActions.MAP_CLEAN;
}

export type MapAction = MapStart |
MapSuccess |
MapError |
MapClean;

/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import {MapAction, MapActions} from './actions';

export interface MapState {
  data: void | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialMapState: MapState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Structures_Map';
export const getMapStateSelector = createFeatureSelector<MapState>(selectorName);

export function MapReducer(
  state: MapState = initialMapState,
  action: MapAction): MapState {
  switch (action.type) {
    case MapActions.MAP_START: return {...state, loading: true, error: null};
    case MapActions.MAP_SUCCESS: return {...state, data: action.payload, loading: false};
    case MapActions.MAP_ERROR: return {...state, error: action.payload, loading: false};
    case MapActions.MAP_CLEAN: return initialMapState;
    default: return state;
  }
}

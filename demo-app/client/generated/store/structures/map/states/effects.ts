/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {of} from 'rxjs';

import {catchError, map, switchMap} from 'rxjs/operators';
import {StructuresService} from '../../../../controllers/Structures';
import {MapActions, MapError, MapStart, MapSuccess} from './actions';

@Injectable()
export class MapEffects {
  @Effect()
  public map = this.storeActions.pipe(
    ofType<MapStart>(MapActions.MAP_START),
    switchMap((action: MapStart) => this.structuresService.map(action.payload)
      .pipe(
        map(result => new MapSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new MapError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private structuresService: StructuresService,
  ) {}
}

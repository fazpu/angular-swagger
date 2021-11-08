/* tslint:disable:max-line-length */
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
import * as actions from './actions';

@Injectable()
export class MapEffects {
  @Effect()
  Map = this.storeActions.pipe(
    ofType<actions.MapStart>(actions.Actions.MAP_START),
    switchMap((action: actions.MapStart) => this.structuresService.map(action.payload)
      .pipe(
        map(result => new actions.MapSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new actions.MapError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private structuresService: StructuresService,
  ) {}
}

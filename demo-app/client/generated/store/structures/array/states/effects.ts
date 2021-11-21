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
import * as actions from './actions';

@Injectable()
export class ArrayEffects {
  @Effect()
  Array = this.storeActions.pipe(
    ofType<actions.ArrayStart>(actions.Actions.ARRAY_START),
    switchMap((action: actions.ArrayStart) => this.structuresService.array(action.payload)
      .pipe(
        map(result => new actions.ArraySuccess(result)),
        catchError((error: HttpErrorResponse) => of(new actions.ArrayError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private structuresService: StructuresService,
  ) {}
}

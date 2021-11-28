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
import {ArrayActions, ArrayError, ArrayStart, ArraySuccess} from './actions';

@Injectable()
export class ArrayEffects {
  @Effect()
  public array = this.storeActions.pipe(
    ofType<ArrayStart>(ArrayActions.ARRAY_START),
    switchMap((action: ArrayStart) => this.structuresService.array(action.payload)
      .pipe(
        map(result => new ArraySuccess(result)),
        catchError((error: HttpErrorResponse) => of(new ArrayError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private structuresService: StructuresService,
  ) {}
}

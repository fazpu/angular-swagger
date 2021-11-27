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
import {ParamsService} from '../../../../controllers/Params';
import {DashedActions, DashedError, DashedStart, DashedSuccess} from './actions';

@Injectable()
export class DashedEffects {
  @Effect()
  Dashed = this.storeActions.pipe(
    ofType<DashedStart>(DashedActions.DASHED_START),
    switchMap((action: DashedStart) => this.paramsService.dashed(action.payload)
      .pipe(
        map(result => new DashedSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new DashedError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private paramsService: ParamsService,
  ) {}
}

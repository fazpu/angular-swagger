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
import {ParamsService} from '../../../../controllers/Params';
import * as actions from './actions';

@Injectable()
export class DashedEffects {
  @Effect()
  Dashed = this.storeActions.pipe(
    ofType<actions.DashedStart>(actions.Actions.DASHED_START),
    switchMap((action: actions.DashedStart) => this.paramsService.dashed(action.payload)
      .pipe(
        map(result => new actions.DashedSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new actions.DashedError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private paramsService: ParamsService,
  ) {}
}

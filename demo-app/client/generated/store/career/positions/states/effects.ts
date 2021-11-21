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
import {CareerService} from '../../../../controllers/Career';
import * as actions from './actions';

@Injectable()
export class PositionsEffects {
  @Effect()
  Positions = this.storeActions.pipe(
    ofType<actions.PositionsStart>(actions.Actions.POSITIONS_START),
    switchMap((action: actions.PositionsStart) => this.careerService.positions(action.payload)
      .pipe(
        map(result => new actions.PositionsSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new actions.PositionsError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private careerService: CareerService,
  ) {}
}

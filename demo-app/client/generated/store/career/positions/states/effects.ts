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
import {PositionsActions, PositionsError, PositionsStart, PositionsSuccess} from './actions';

@Injectable()
export class PositionsEffects {
  @Effect()
  public positions = this.storeActions.pipe(
    ofType<PositionsStart>(PositionsActions.POSITIONS_START),
    switchMap((action: PositionsStart) => this.careerService.positions(action.payload)
      .pipe(
        map(result => new PositionsSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new PositionsError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private careerService: CareerService,
  ) {}
}

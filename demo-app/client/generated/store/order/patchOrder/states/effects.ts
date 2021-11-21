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
import {OrderService} from '../../../../controllers/Order';
import * as actions from './actions';

@Injectable()
export class PatchOrderEffects {
  @Effect()
  PatchOrder = this.storeActions.pipe(
    ofType<actions.PatchOrderStart>(actions.Actions.PATCHORDER_START),
    switchMap((action: actions.PatchOrderStart) => this.orderService.patchOrder(action.payload)
      .pipe(
        map(result => new actions.PatchOrderSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new actions.PatchOrderError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private orderService: OrderService,
  ) {}
}

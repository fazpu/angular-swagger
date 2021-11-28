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
import {PatchOrderActions, PatchOrderError, PatchOrderStart, PatchOrderSuccess} from './actions';

@Injectable()
export class PatchOrderEffects {
  @Effect()
  public patchOrder = this.storeActions.pipe(
    ofType<PatchOrderStart>(PatchOrderActions.PATCH_ORDER_START),
    switchMap((action: PatchOrderStart) => this.orderService.patchOrder(action.payload)
      .pipe(
        map(result => new PatchOrderSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new PatchOrderError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private orderService: OrderService,
  ) {}
}

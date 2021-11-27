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
import {PutOrderActions, PutOrderError, PutOrderStart, PutOrderSuccess} from './actions';

@Injectable()
export class PutOrderEffects {
  @Effect()
  PutOrder = this.storeActions.pipe(
    ofType<PutOrderStart>(PutOrderActions.PUTORDER_START),
    switchMap((action: PutOrderStart) => this.orderService.putOrder(action.payload)
      .pipe(
        map(result => new PutOrderSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new PutOrderError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private orderService: OrderService,
  ) {}
}

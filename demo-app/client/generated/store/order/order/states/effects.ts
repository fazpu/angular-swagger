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
import {OrderActions, OrderError, OrderStart, OrderSuccess} from './actions';

@Injectable()
export class OrderEffects {
  @Effect()
  Order = this.storeActions.pipe(
    ofType<OrderStart>(OrderActions.ORDER_START),
    switchMap((action: OrderStart) => this.orderService.order(action.payload)
      .pipe(
        map(result => new OrderSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new OrderError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private orderService: OrderService,
  ) {}
}

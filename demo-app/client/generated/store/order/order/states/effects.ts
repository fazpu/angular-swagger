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
import {OrderService} from '../../../../controllers/Order';
import * as actions from './actions';

@Injectable()
export class OrderEffects {
  @Effect()
  Order = this.storeActions.pipe(
    ofType<actions.OrderStart>(actions.Actions.ORDER_START),
    switchMap((action: actions.OrderStart) => this.orderService.order(action.payload)
      .pipe(
        map(result => new actions.OrderSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new actions.OrderError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private orderService: OrderService,
  ) {}
}

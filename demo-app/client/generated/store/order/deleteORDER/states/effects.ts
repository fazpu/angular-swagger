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
export class DeleteORDEREffects {
  @Effect()
  DeleteORDER = this.storeActions.pipe(
    ofType<actions.DeleteORDERStart>(actions.Actions.DELETEORDER_START),
    switchMap((action: actions.DeleteORDERStart) => this.orderService.deleteORDER(action.payload)
      .pipe(
        map(result => new actions.DeleteORDERSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new actions.DeleteORDERError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private orderService: OrderService,
  ) {}
}

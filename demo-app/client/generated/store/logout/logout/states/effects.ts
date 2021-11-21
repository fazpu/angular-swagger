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
import {LogoutService} from '../../../../controllers/Logout';
import * as actions from './actions';

@Injectable()
export class LogoutEffects {
  @Effect()
  Logout = this.storeActions.pipe(
    ofType<actions.LogoutStart>(actions.Actions.LOGOUT_START),
    switchMap(() => this.logoutService.logout()
      .pipe(
        map(result => new actions.LogoutSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new actions.LogoutError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private logoutService: LogoutService,
  ) {}
}

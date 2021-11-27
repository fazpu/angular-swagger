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
import {LoginService} from '../../../../controllers/Login';
import {LoginActions, LoginError, LoginStart, LoginSuccess} from './actions';

@Injectable()
export class LoginEffects {
  @Effect()
  Login = this.storeActions.pipe(
    ofType<LoginStart>(LoginActions.LOGIN_START),
    switchMap((action: LoginStart) => this.loginService.login(action.payload)
      .pipe(
        map(result => new LoginSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new LoginError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private loginService: LoginService,
  ) {}
}

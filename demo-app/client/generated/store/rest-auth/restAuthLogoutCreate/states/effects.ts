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
import {RestAuthService} from '../../../../controllers/RestAuth';
import {RestAuthLogoutCreateActions, RestAuthLogoutCreateError, RestAuthLogoutCreateStart, RestAuthLogoutCreateSuccess} from './actions';

@Injectable()
export class RestAuthLogoutCreateEffects {
  @Effect()
  public restAuthLogoutCreate = this.storeActions.pipe(
    ofType<RestAuthLogoutCreateStart>(RestAuthLogoutCreateActions.REST_AUTH_LOGOUT_CREATE_START),
    switchMap(() => this.restauthService.restAuthLogoutCreate()
      .pipe(
        map(result => new RestAuthLogoutCreateSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new RestAuthLogoutCreateError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private restauthService: RestAuthService,
  ) {}
}

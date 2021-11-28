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
import {RestAuthUserPartialUpdateActions, RestAuthUserPartialUpdateError, RestAuthUserPartialUpdateStart, RestAuthUserPartialUpdateSuccess} from './actions';

@Injectable()
export class RestAuthUserPartialUpdateEffects {
  @Effect()
  public restAuthUserPartialUpdate = this.storeActions.pipe(
    ofType<RestAuthUserPartialUpdateStart>(RestAuthUserPartialUpdateActions.REST_AUTH_USER_PARTIAL_UPDATE_START),
    switchMap((action: RestAuthUserPartialUpdateStart) => this.restauthService.restAuthUserPartialUpdate(action.payload)
      .pipe(
        map(result => new RestAuthUserPartialUpdateSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new RestAuthUserPartialUpdateError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private restauthService: RestAuthService,
  ) {}
}

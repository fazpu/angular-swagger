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
import {RestAuthUserUpdateActions, RestAuthUserUpdateError, RestAuthUserUpdateStart, RestAuthUserUpdateSuccess} from './actions';

@Injectable()
export class RestAuthUserUpdateEffects {
  @Effect()
  RestAuthUserUpdate = this.storeActions.pipe(
    ofType<RestAuthUserUpdateStart>(RestAuthUserUpdateActions.RESTAUTHUSERUPDATE_START),
    switchMap((action: RestAuthUserUpdateStart) => this.restauthService.restAuthUserUpdate(action.payload)
      .pipe(
        map(result => new RestAuthUserUpdateSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new RestAuthUserUpdateError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private restauthService: RestAuthService,
  ) {}
}

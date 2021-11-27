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
import {RestAuthUserReadActions, RestAuthUserReadError, RestAuthUserReadStart, RestAuthUserReadSuccess} from './actions';

@Injectable()
export class RestAuthUserReadEffects {
  @Effect()
  RestAuthUserRead = this.storeActions.pipe(
    ofType<RestAuthUserReadStart>(RestAuthUserReadActions.RESTAUTHUSERREAD_START),
    switchMap(() => this.restauthService.restAuthUserRead()
      .pipe(
        map(result => new RestAuthUserReadSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new RestAuthUserReadError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private restauthService: RestAuthService,
  ) {}
}

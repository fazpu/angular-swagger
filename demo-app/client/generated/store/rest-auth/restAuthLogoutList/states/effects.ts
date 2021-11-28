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
import {RestAuthLogoutListActions, RestAuthLogoutListError, RestAuthLogoutListStart, RestAuthLogoutListSuccess} from './actions';

@Injectable()
export class RestAuthLogoutListEffects {
  @Effect()
  public restAuthLogoutList = this.storeActions.pipe(
    ofType<RestAuthLogoutListStart>(RestAuthLogoutListActions.REST_AUTH_LOGOUT_LIST_START),
    switchMap(() => this.restauthService.restAuthLogoutList()
      .pipe(
        map(result => new RestAuthLogoutListSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new RestAuthLogoutListError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private restauthService: RestAuthService,
  ) {}
}

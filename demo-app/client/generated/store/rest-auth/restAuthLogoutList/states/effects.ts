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
import * as actions from './actions';

@Injectable()
export class RestAuthLogoutListEffects {
  @Effect()
  RestAuthLogoutList = this.storeActions.pipe(
    ofType<actions.RestAuthLogoutListStart>(actions.Actions.RESTAUTHLOGOUTLIST_START),
    switchMap(() => this.restauthService.restAuthLogoutList()
      .pipe(
        map(result => new actions.RestAuthLogoutListSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new actions.RestAuthLogoutListError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private restauthService: RestAuthService,
  ) {}
}

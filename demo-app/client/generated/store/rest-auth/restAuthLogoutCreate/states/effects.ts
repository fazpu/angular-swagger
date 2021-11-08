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
import {RestAuthService} from '../../../../controllers/RestAuth';
import * as actions from './actions';

@Injectable()
export class RestAuthLogoutCreateEffects {
  @Effect()
  RestAuthLogoutCreate = this.storeActions.pipe(
    ofType<actions.RestAuthLogoutCreateStart>(actions.Actions.RESTAUTHLOGOUTCREATE_START),
    switchMap(() => this.restauthService.restAuthLogoutCreate()
      .pipe(
        map(result => new actions.RestAuthLogoutCreateSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new actions.RestAuthLogoutCreateError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private restauthService: RestAuthService,
  ) {}
}

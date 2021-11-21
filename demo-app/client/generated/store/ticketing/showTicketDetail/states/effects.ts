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
import {TicketingService} from '../../../../controllers/Ticketing';
import * as actions from './actions';

@Injectable()
export class ShowTicketDetailEffects {
  @Effect()
  ShowTicketDetail = this.storeActions.pipe(
    ofType<actions.ShowTicketDetailStart>(actions.Actions.SHOWTICKETDETAIL_START),
    switchMap((action: actions.ShowTicketDetailStart) => this.ticketingService.showTicketDetail(action.payload)
      .pipe(
        map(result => new actions.ShowTicketDetailSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new actions.ShowTicketDetailError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private ticketingService: TicketingService,
  ) {}
}

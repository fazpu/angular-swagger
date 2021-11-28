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
import {ShowTicketDetailActions, ShowTicketDetailError, ShowTicketDetailStart, ShowTicketDetailSuccess} from './actions';

@Injectable()
export class ShowTicketDetailEffects {
  @Effect()
  public showTicketDetail = this.storeActions.pipe(
    ofType<ShowTicketDetailStart>(ShowTicketDetailActions.SHOW_TICKET_DETAIL_START),
    switchMap((action: ShowTicketDetailStart) => this.ticketingService.showTicketDetail(action.payload)
      .pipe(
        map(result => new ShowTicketDetailSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new ShowTicketDetailError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private ticketingService: TicketingService,
  ) {}
}

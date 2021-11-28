/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {ShowTicketDetailParams} from '../../../../controllers/Ticketing';
import * as __model from '../../../../model';

export enum ShowTicketDetailActions {
  SHOW_TICKET_DETAIL_START = '[Ticketing showTicketDetail] Start',
  SHOW_TICKET_DETAIL_SUCCESS = '[Ticketing showTicketDetail] Success',
  SHOW_TICKET_DETAIL_ERROR = '[Ticketing showTicketDetail] Error',
  SHOW_TICKET_DETAIL_CLEAN = '[Ticketing showTicketDetail] Clean',
}

export class ShowTicketDetailStart implements Action {
  public readonly type = ShowTicketDetailActions.SHOW_TICKET_DETAIL_START;
  constructor(public payload: ShowTicketDetailParams) {}
}

export class ShowTicketDetailSuccess implements Action {
  public readonly type = ShowTicketDetailActions.SHOW_TICKET_DETAIL_SUCCESS;
  constructor(public payload: __model.TicketDetailOutput[]) {}
}

export class ShowTicketDetailError implements Action {
  public readonly type = ShowTicketDetailActions.SHOW_TICKET_DETAIL_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class ShowTicketDetailClean implements Action {
  public readonly type = ShowTicketDetailActions.SHOW_TICKET_DETAIL_CLEAN;
}

export type ShowTicketDetailAction = ShowTicketDetailStart |
ShowTicketDetailSuccess |
ShowTicketDetailError |
ShowTicketDetailClean;

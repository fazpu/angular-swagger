/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as __model from '../../../../model';
import * as actions from './actions';

export interface ShowTicketDetailState {
  data: __model.TicketDetailOutput[] | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialShowTicketDetailState: ShowTicketDetailState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Ticketing_ShowTicketDetail';
export const getShowTicketDetailStateSelector = createFeatureSelector<ShowTicketDetailState>(selectorName);

export function ShowTicketDetailReducer(
  state: ShowTicketDetailState = initialShowTicketDetailState,
  action: actions.ShowTicketDetailAction): ShowTicketDetailState {
  switch (action.type) {
    case actions.Actions.SHOWTICKETDETAIL_START: return {...state, loading: true, error: null};
    case actions.Actions.SHOWTICKETDETAIL_SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.SHOWTICKETDETAIL_ERROR: return {...state, error: action.payload, loading: false};
    case actions.Actions.SHOWTICKETDETAIL_CLEAN: return initialShowTicketDetailState;
    default: return state;
  }
}

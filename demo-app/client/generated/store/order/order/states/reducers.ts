/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import {OrderAction, OrderActions} from './actions';

export interface OrderState {
  data: Record<string, unknown> | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialOrderState: OrderState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Order_Order';
export const getOrderStateSelector = createFeatureSelector<OrderState>(selectorName);

export function OrderReducer(
  state: OrderState = initialOrderState,
  action: OrderAction): OrderState {

  switch (action.type) {
    case OrderActions.ORDER_START:
      return {...state, loading: true, error: null};

    case OrderActions.ORDER_SUCCESS:
      return {...state, data: action.payload, loading: false};

    case OrderActions.ORDER_ERROR:
      return {...state, error: action.payload, loading: false};

    case OrderActions.ORDER_CLEAN:
      return initialOrderState;

    default:
      return state;
  }
}

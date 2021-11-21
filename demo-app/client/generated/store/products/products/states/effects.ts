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
import {ProductsService} from '../../../../controllers/Products';
import * as actions from './actions';

@Injectable()
export class ProductsEffects {
  @Effect()
  Products = this.storeActions.pipe(
    ofType<actions.ProductsStart>(actions.Actions.PRODUCTS_START),
    switchMap((action: actions.ProductsStart) => this.productsService.products(action.payload)
      .pipe(
        map(result => new actions.ProductsSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new actions.ProductsError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private productsService: ProductsService,
  ) {}
}

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
import {ProductsActions, ProductsError, ProductsStart, ProductsSuccess} from './actions';

@Injectable()
export class ProductsEffects {
  @Effect()
  Products = this.storeActions.pipe(
    ofType<ProductsStart>(ProductsActions.PRODUCTS_START),
    switchMap((action: ProductsStart) => this.productsService.products(action.payload)
      .pipe(
        map(result => new ProductsSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new ProductsError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private productsService: ProductsService,
  ) {}
}

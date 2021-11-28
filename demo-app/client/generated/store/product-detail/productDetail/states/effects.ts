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
import {ProductDetailService} from '../../../../controllers/ProductDetail';
import {ProductDetailActions, ProductDetailError, ProductDetailStart, ProductDetailSuccess} from './actions';

@Injectable()
export class ProductDetailEffects {
  @Effect()
  public productDetail = this.storeActions.pipe(
    ofType<ProductDetailStart>(ProductDetailActions.PRODUCT_DETAIL_START),
    switchMap((action: ProductDetailStart) => this.productdetailService.productDetail(action.payload)
      .pipe(
        map(result => new ProductDetailSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new ProductDetailError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private productdetailService: ProductDetailService,
  ) {}
}

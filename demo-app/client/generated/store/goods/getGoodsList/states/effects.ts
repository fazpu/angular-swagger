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
import {GoodsService} from '../../../../controllers/Goods';
import {GetGoodsListActions, GetGoodsListError, GetGoodsListStart, GetGoodsListSuccess} from './actions';

@Injectable()
export class GetGoodsListEffects {
  @Effect()
  public getGoodsList = this.storeActions.pipe(
    ofType<GetGoodsListStart>(GetGoodsListActions.GET_GOODS_LIST_START),
    switchMap((action: GetGoodsListStart) => this.goodsService.getGoodsList(action.payload)
      .pipe(
        map(result => new GetGoodsListSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new GetGoodsListError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private goodsService: GoodsService,
  ) {}
}

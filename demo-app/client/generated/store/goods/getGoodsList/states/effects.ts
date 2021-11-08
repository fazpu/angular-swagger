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
import {GoodsService} from '../../../../controllers/Goods';
import * as actions from './actions';

@Injectable()
export class GetGoodsListEffects {
  @Effect()
  GetGoodsList = this.storeActions.pipe(
    ofType<actions.GetGoodsListStart>(actions.Actions.GETGOODSLIST_START),
    switchMap((action: actions.GetGoodsListStart) => this.goodsService.getGoodsList(action.payload)
      .pipe(
        map(result => new actions.GetGoodsListSuccess(result)),
        catchError((error: HttpErrorResponse) => of(new actions.GetGoodsListError(error))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private goodsService: GoodsService,
  ) {}
}

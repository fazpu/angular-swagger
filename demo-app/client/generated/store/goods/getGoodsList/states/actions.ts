/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {GetGoodsListParams} from '../../../../controllers/Goods';
import * as __model from '../../../../model';

export enum GetGoodsListActions {
  GET_GOODS_LIST_START = '[Goods getGoodsList] Start',
  GET_GOODS_LIST_SUCCESS = '[Goods getGoodsList] Success',
  GET_GOODS_LIST_ERROR = '[Goods getGoodsList] Error',
  GET_GOODS_LIST_CLEAN = '[Goods getGoodsList] Clean',
}

export class GetGoodsListStart implements Action {
  public readonly type = GetGoodsListActions.GET_GOODS_LIST_START;
  constructor(public payload: GetGoodsListParams) {}
}

export class GetGoodsListSuccess implements Action {
  public readonly type = GetGoodsListActions.GET_GOODS_LIST_SUCCESS;
  constructor(public payload: __model.GetGoodsListGeneratedInlineModel) {}
}

export class GetGoodsListError implements Action {
  public readonly type = GetGoodsListActions.GET_GOODS_LIST_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class GetGoodsListClean implements Action {
  public readonly type = GetGoodsListActions.GET_GOODS_LIST_CLEAN;
}

export type GetGoodsListAction = GetGoodsListStart |
GetGoodsListSuccess |
GetGoodsListError |
GetGoodsListClean;

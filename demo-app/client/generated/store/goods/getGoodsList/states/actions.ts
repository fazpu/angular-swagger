/* eslint-disable max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {GetGoodsListParams} from '../../../../controllers/Goods';
import * as __model from '../../../../model';

export enum Actions {
  GETGOODSLIST_START = '[Goods getGoodsList] Start',
  GETGOODSLIST_SUCCESS = '[Goods getGoodsList] Success',
  GETGOODSLIST_ERROR = '[Goods getGoodsList] Error',
  GETGOODSLIST_CLEAN = '[Goods getGoodsList] Clean',
}

export class GetGoodsListStart implements Action {
  readonly type = Actions.GETGOODSLIST_START;
  constructor(public payload: GetGoodsListParams) {}
}

export class GetGoodsListSuccess implements Action {
  readonly type = Actions.GETGOODSLIST_SUCCESS;
  constructor(public payload: __model.GetGoodsListGeneratedInlineModel) {}
}

export class GetGoodsListError implements Action {
  readonly type = Actions.GETGOODSLIST_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class GetGoodsListClean implements Action {
  readonly type = Actions.GETGOODSLIST_CLEAN;
}

export type GetGoodsListAction = GetGoodsListStart |
GetGoodsListSuccess |
GetGoodsListError |
GetGoodsListClean;

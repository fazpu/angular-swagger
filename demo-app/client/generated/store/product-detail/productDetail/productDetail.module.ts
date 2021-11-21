/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {ProductDetailService} from '../../../controllers/ProductDetail';
import {ProductDetailEffects} from './states/effects';
import {ProductDetailReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    NgrxStoreModule.forFeature(selectorName, ProductDetailReducer),
    NgrxEffectsModule.forFeature([ProductDetailEffects]),
  ],
  providers: [
    ProductDetailService,
  ],
})
export class ProductDetailModule {}

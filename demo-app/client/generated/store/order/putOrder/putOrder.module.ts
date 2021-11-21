/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {OrderService} from '../../../controllers/Order';
import {PutOrderEffects} from './states/effects';
import {PutOrderReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    NgrxStoreModule.forFeature(selectorName, PutOrderReducer),
    NgrxEffectsModule.forFeature([PutOrderEffects]),
  ],
  providers: [
    OrderService,
  ],
})
export class PutOrderModule {}

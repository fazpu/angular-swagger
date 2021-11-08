/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {OrderService} from '../../../controllers/Order';
import {DeleteORDEREffects} from './states/effects';
import {DeleteORDERReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    NgrxStoreModule.forFeature(selectorName, DeleteORDERReducer),
    NgrxEffectsModule.forFeature([DeleteORDEREffects]),
  ],
  providers: [
    OrderService,
  ],
})
export class DeleteORDERModule {}

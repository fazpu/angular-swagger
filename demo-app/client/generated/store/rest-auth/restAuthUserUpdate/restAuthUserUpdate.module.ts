/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {RestAuthService} from '../../../controllers/RestAuth';
import {RestAuthUserUpdateEffects} from './states/effects';
import {RestAuthUserUpdateReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    NgrxStoreModule.forFeature(selectorName, RestAuthUserUpdateReducer),
    NgrxEffectsModule.forFeature([RestAuthUserUpdateEffects]),
  ],
  providers: [
    RestAuthService,
  ],
})
export class RestAuthUserUpdateModule {}

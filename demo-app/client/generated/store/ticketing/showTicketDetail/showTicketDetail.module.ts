/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {TicketingService} from '../../../controllers/Ticketing';
import {ShowTicketDetailEffects} from './states/effects';
import {ShowTicketDetailReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    NgrxStoreModule.forFeature(selectorName, ShowTicketDetailReducer),
    NgrxEffectsModule.forFeature([ShowTicketDetailEffects]),
  ],
  providers: [
    TicketingService,
  ],
})
export class ShowTicketDetailModule {}

/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {createSelector} from '@ngrx/store';
import {getDeleteORDERState} from './reducers';

export const getDeleteORDERStateData = createSelector(
  getDeleteORDERState,
  state => state.data,
);

export const getDeleteORDERStateError = createSelector(
  getDeleteORDERState,
  state => state.error,
);

export const getDeleteORDERStateLoading = createSelector(
  getDeleteORDERState,
  state => state.loading,
);


/* eslint-disable max-len, max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {RegistrationParams} from '../../../../controllers/Registration';

export enum RegistrationActions {
  REGISTRATION_START = '[Registration registration] Start',
  REGISTRATION_SUCCESS = '[Registration registration] Success',
  REGISTRATION_ERROR = '[Registration registration] Error',
  REGISTRATION_CLEAN = '[Registration registration] Clean',
}

export class RegistrationStart implements Action {
  readonly type = RegistrationActions.REGISTRATION_START;
  constructor(public payload: RegistrationParams) {}
}

export class RegistrationSuccess implements Action {
  readonly type = RegistrationActions.REGISTRATION_SUCCESS;
  constructor(public payload: Record<string, unknown>) {}
}

export class RegistrationError implements Action {
  readonly type = RegistrationActions.REGISTRATION_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export class RegistrationClean implements Action {
  readonly type = RegistrationActions.REGISTRATION_CLEAN;
}

export type RegistrationAction = RegistrationStart |
RegistrationSuccess |
RegistrationError |
RegistrationClean;

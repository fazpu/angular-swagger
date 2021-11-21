/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

export interface PositionsParams {
  /**
   * Position Id
   * format: int32
   */
  positionId: number;
  /** API version */
  version: string;
}

@Injectable()
export class CareerService {
  constructor(private http: HttpClient) {}

  /**
   * get career
   * http://example.com/swagger/swagger-ui.html#!/Career/Career
   */
  positions(params: PositionsParams): Observable<Record<string, unknown>> {
    const pathParams = {
      positionId: params.positionId,
      version: params.version,
    };
    return this.http.get<Record<string, unknown>>(`/api-base-path/career/v${pathParams.version}/positions/${pathParams.positionId}`);
  }
}

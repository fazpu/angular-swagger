/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class LogoutService {
  constructor(private http: HttpClient) {}

  /**
   * Logout - empty post body
   * http://example.com/swagger/swagger-ui.html#!/Logout/Logout
   */
  logout(): Observable<Record<string, unknown>> {
    return this.http.post<Record<string, unknown>>(`/api-base-path/logout`, {});
  }
}

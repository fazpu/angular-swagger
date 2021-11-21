/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import * as __model from '../model';

export interface LoginParams {
  /** login */
  loginDto: __model.LoginDto;
}

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  /**
   * create registration credentials
   * http://example.com/swagger/swagger-ui.html#!/Login/Registration
   */
  login(params: LoginParams): Observable<Record<string, unknown>> {
    const formDataParams = {
      loginDto: params.loginDto,
    };
    return this.http.post<Record<string, unknown>>(`/api-base-path/login`, formDataParams);
  }
  login_(loginDto: __model.LoginDto): Observable<Record<string, unknown>> {
    return this.login({loginDto});
  }

}

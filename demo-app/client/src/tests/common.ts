import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

interface HttpBed<T> {
  service: T;
  backend: HttpTestingController;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ClassInterface<T> = new (...a: any[]) => T;

/**
 * Prepares test bed for http service test
 * @param service to be tested
 * @param providers additional providers to be injected
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function initHttpBed<T>(service: ClassInterface<T>, providers: Array<ClassInterface<any>> = []): HttpBed<T> {
  TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      HttpClientTestingModule,
    ],
    providers: [service, ...providers],
  });

  return {
    service: TestBed.get(service),
    backend: TestBed.get(HttpTestingController),
  };
}

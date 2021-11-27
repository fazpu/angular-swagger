# Angular Swagger2
This repository was derived from [swagger-angular-generator](https://github.com/jnwltr/swagger-angular-generator).
The main difference is that it drops support for form services and extends ngrx generation capabilities.

## Purpose

Generate minimalistic TypeScript API layer for Angular with full type reflection of backend model.
- Source: [swagger scheme](https://swagger.io/specification/)
- Destination: [Angular-cli](https://cli.angular.io/) based [Angular](https://angular.io/) app.

## What is generated

### Services for back-end / API communication
- connect to your API in no-time

### Interfaces
- request and response interfaces are created

### NGRX modules for endpoints (optional)
- so that the server responses can be reached in the redux store
- requests can be triggered by dispatching an action

##### Have a look at the [demo-app generated files](demo-app/client/generated) to get better understanding what is being generated.

## Install
`npm i angular-swagger2`

## Options
- `-h` - show help
- `-s`, `--src` - source directory
- `-d`, `--dest` - destination directory, default: `src/api`
- `--no-store` - do not generate the ngrx modules
- `-u, --swagger-URL-path` - swagger URL path, where the swagger ui documentation can be found; default: `/swagger`, i.e. the resulting address would be `http://example/swagger`
- `-o, --omit-version` - disables API version information to be generated in comments for each file


## Use

### Run generator

1. get the swagger scheme (typically at http(s)://[server]/[app-path]/v2/api/api-docs)
1. save it to json file in input directory and optionally **format** it for better diff
1. run via
    1. **directly** `./node_modules/.bin/angular-swagger2`
    1. **as module** `angular-swagger2` package, `npm run generate`
        ```javascript
        "script": {
          "generate": "angular-swagger2 -s src/api/scheme.json -d src/api/generated"
          ...
        }
        ```
    1. or **programatically** as a method invocation
        ```typescript
        import {generate} from 'angular-swagger2';
        // or using CommonJS loader
        const {generate} = require('angular-swagger2');

        generate('conf/api/api-docs.json', 'src/api');
        ```

The resulting API layer contains the following structure in the destination directory:

1. `controllers` directory stores services containing all API methods devided by controllers
1. `defs` directory stores all response interfaces and enums
1. `store` directory has modules, which contain NGRX actions, reducers and effects
1. `model.ts` file reexports all of them together for a simple access

When updating your code for new backend version, we recommend you to follow these steps:

1. `git diff` the changes
1. run `tsc` for immediate problems
1. adjust the code, solve problems
1. commit

### Use

In order to consume generated model, follow the steps **1-9** in the following example to use generated API model.

#### API service usage in component

```typescript
// 1. import used response interfaces
import {ItemDto, PageDto} from '[relative-path-to-destination-directory]/model';
// 2. import used API service and optionally param interfaces
import {DataService, MethodParams} from '[relative-path-to-destination-directory]/api/DataService';

@Component({
  ...
  // 3. make the service injectable (can be also imported in the module)
  providers: [DataService],
})
export class MyComponent implements OnInit {
  // 4. declare response object variables based on the generated API interfaces
  public items: ItemDto[] = [];
  public page: PageDto;

  // 5. declare request params based on the generated API interface (all params are passed together in one object)
  private params: MethodParams = {
    page: 0,
    size: 10,
    sort: ['name:asc']
  };

  // 6. inject the API service
  constructor(private dataService: DataService) {}

  public ngOnInit() {
    // 7. the returned observable is fully typed
    this.dataService
      .get(this.params)
      // 8. returned data are fully typed
      .subscribe(data => {
        // 9. assignments are type-checked
        this.items = data.content;
        this.page = data.page;
      });
  }
}
```

#### NGRX workflow with generated modules, actions, effects, reducerss

##### Import the generated module
```typescript
@NgModule({
  imports: [
    ...,
    ExampleModule,
    ...,
  ],
})
export class YourModule {}
```

- the generated module looks like this
```typescript
@NgModule({
  imports: [
    NgrxStoreModule.forFeature(selectorName, ExampleReducer),
    NgrxEffectsModule.forFeature([ExampleEffects]),
  ],
  providers: [
    ExampleService,
  ],
})
export class ExampleModule {}
```

##### Component (created by you)

In the component, send the above created form via `sendForm()` method. Notice the way a generated anction is dispatched.

```typescript
import {Component, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';
import {ExampleStart} from '../../generated/store/example/exampleModule/states/actions';
import {AppState} from '../states/exmaple.models';

@Component({
  selector: 'example-component',
  templateUrl: 'example-component.html',
})
export class ExampleComponent implements OnDestroy {

  constructor(
    private store: Store<AppState>,
  ) {}

  sendForm() {
    this.store.dispatch(new ExampleStart());
  }

  ngOnDestroy() {
    this.ngDestroy.next();
    this.ngDestroy.complete();
  }
}
```

##### Effect (generated)
- the dispatched method is intercepted by an effect which calls the API via the generated API service
- upon success, a `Success` action is dispatched (payload is the server response data)
- upon error, an `Error` action is dispatched (payload is the error message sent from the server)

```typescript
@Injectable()
export class ExampleEffects {
  @Effect()
  CreateProductCategory = this.storeActions.ofType<actions.Start>(actions.Actions.START).pipe(
    switchMap((action: actions.Start) => this.exampleService.exampleEndpointMethod(action.payload)
      .pipe(
        map(result => new actions.Success(result)),
        catchError((error: HttpErrorResponse) => of(new actions.Error(error.message))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private adminproductService: AdminProductService,
  ) {}
}
```

##### Reducer (generated)
- the reducer catches the `Success` / `Error` actions dispatched by the generated effect and stores the payloads to the store
```typescript
export interface ExampleState {
  data: __model.ExampleServerResponseInterface;
  loading: boolean;
  error: string;
}

export const initialExampleState: ExampleState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Example';
export const getExampleSelector = createFeatureSelector<ExampleState>(selectorName);

export function ExampleReducer(
  state: ExampleState = initialExampleState,
  action: actions.ExampleAction): ExampleState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
```

##### Component (again)
- the data can be retrieved by subscribing to the store

```typescript
ngOnInit() {
    this.exampleState = this.store.pipe(
      takeUntil(this.ngDestroy),
      select(getExampleSelector));
    // OR
    this.data = this.store.select(s => ExampleState.data)
    this.loading = this.store.select(s => ExampleState.loading)
    this.error = this.store.select(s => ExampleState.error)
}
```

## Assumptions / limitations

1. swagger file is in [version 2](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md) format, it must be json
1. each endpoint must have a `tags` attribute defined. In addition, there must be exactly one tag defined.
The http methods are grouped to services based on the tags, i.e. if two methods have tag "order", both will be
generated inside Order.ts
1. `get` and `delete` methods do not contain `body`
1. swagger file should contain values for the keys `host` and `basePath` so that each generated service method can contain a link to the swagger UI method reference, e.g. `http://example.com/swagger/swagger-ui.html#!/Order/Order`
1. `definitions` section in swagger file does not contain types with inline definitions, i.e. only named subtypes work

#### Usage of NGRX modules

## Development

* developed with node v16

### Docker image

1. `docker build . -t angular-swagger2`
1. `docker run -u $(id -u) -it -v "$PWD":/code angular-swagger2 bash`
1. `npm i`
1. `npm run install:demo`

### Testing

#### How the testing works

* tests are written in the demo-app
* the test swagger files can be found in demo-app/client/test-swaggers
* upon these swagger files, interfaces and services are generated
* the generated services are manually imported to the app.module.ts
* unit tests can be found in demo-app/client/src/tests

#### Running the tests

To run client tests in interactive mode:

1. `cd demo-app/client`
1. `npm test`

---

### Release

* `git checkout -b tech/release` on master or other branch you want to release
* `npm version patch` or other version change you want
* make a PR
* once merged `npm publish`


### _Pull requests are welcome!_

Please do the following before making a PR:

1. Build the app and regenerate testing files via `npm run build`.
1. Check test pass via `npm test`.
1. Check files lint via `npm run lint`.

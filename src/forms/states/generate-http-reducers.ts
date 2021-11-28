import * as path from 'path';

import {stateDir} from '../../conf';
import {Config} from '../../generate';
import {indent, toSnakeCaseUpper, writeFile} from '../../utils';

export function generateHttpReducers(config: Config, name: string, actionClassNameBase: string,
                                     formSubDirName: string, responseType: string) {
  let content = '';
  content += getReducerImports(responseType.startsWith('__model.'), actionClassNameBase);
  content += getStateInteface(actionClassNameBase, responseType);
  content += getInitialState(actionClassNameBase);
  content += getFeatureSelector(name, actionClassNameBase);
  content += getReducerDefinition(actionClassNameBase);

  const reducersFileName = path.join(formSubDirName, stateDir, `reducers.ts`);
  writeFile(reducersFileName, content, config.header);
}

function getReducerImports(usesModels: boolean, actionClassNameBase: string) {
  let res = `import {createFeatureSelector} from '@ngrx/store';\n\n`;
  res += `import {HttpErrorResponse} from '@angular/common/http';\n`;
  if (usesModels) res += `import * as __model from '../../../../model';\n`;
  res += `import {${actionClassNameBase}Action, ${actionClassNameBase}Actions} from './actions';\n\n`;

  return res;
}

function getStateInteface(actionClassNameBase: string, type: string) {
  let res = `export interface ${actionClassNameBase}State {\n`;
  res += indent(`data: ${type} | null;\n`);
  res += indent(`loading: boolean;\n`);
  res += indent(`error: HttpErrorResponse | null;\n`);
  res += `}\n\n`;

  return res;
}

function getInitialState(actionClassNameBase: string) {
  let res = `export const initial${actionClassNameBase}State: ${actionClassNameBase}State = {\n`;
  res += indent(`data: null,\n`);
  res += indent(`loading: false,\n`);
  res += indent(`error: null,\n`);
  res += `};\n\n`;

  return res;
}

function getFeatureSelector(name: string, actionClassNameBase: string) {
  let res = `export const selectorName = '${name}_${actionClassNameBase}';\n`;
  res += `export const get${actionClassNameBase}StateSelector = ` +
         `createFeatureSelector<${actionClassNameBase}State>(selectorName);\n\n`;

  return res;
}

function getReducerDefinition(actionClassNameBase: string) {
  let res = `export function ${actionClassNameBase}Reducer(\n`;
  res += indent(`state: ${actionClassNameBase}State = initial${actionClassNameBase}State,\n`);
  res += indent(`action: ${actionClassNameBase}Action): ${actionClassNameBase}State {\n`);
  res += '\n';
  res += indent(`switch (action.type) {\n`);
  res += indent(`case ${actionClassNameBase}Actions.${toSnakeCaseUpper(actionClassNameBase)}_START:\n`, 2);
  res += indent(`return {...state, loading: true, error: null};\n`, 3);
  res += '\n';
  res += indent(`case ${actionClassNameBase}Actions.${toSnakeCaseUpper(actionClassNameBase)}_SUCCESS:\n`, 2);
  res += indent(`return {...state, data: action.payload, loading: false};\n`, 3);
  res += '\n';
  res += indent(`case ${actionClassNameBase}Actions.${toSnakeCaseUpper(actionClassNameBase)}_ERROR:\n`, 2);
  res += indent(`return {...state, error: action.payload, loading: false};\n`, 3);
  res += '\n';
  res += indent(`case ${actionClassNameBase}Actions.${toSnakeCaseUpper(actionClassNameBase)}_CLEAN:\n`, 2);
  res += indent(`return initial${actionClassNameBase}State;\n`, 3);
  res += '\n';
  res += indent(`default:\n`, 2);
  res += indent(`return state;\n`, 3);
  res += indent(`}\n`);
  res += `}\n`;

  return res;
}

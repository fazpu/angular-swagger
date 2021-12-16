import * as path from 'path';
import {Config} from '../../generate';
import {indent, writeFile} from '../../utils';

export function generateHttpSelectors(config: Config, actionClassNameBase: string,
                                      formSubDirName: string,) {
  let content = '';
  content += getSelectorsImports(actionClassNameBase);
  content += getSelectorDefinitions(actionClassNameBase);

  const effectsFileName = path.join(formSubDirName, `states`, `selectors.ts`);
  writeFile(effectsFileName, content, config.header);
}

function getSelectorsImports(actionClassNameBase: string) {
  let res = `import {createSelector} from '@ngrx/store';\n`;
  res += `import {get${actionClassNameBase}State} from './reducers';\n`;
  res += `\n`;

  return res;
}

function getSelectorDefinitions(actionClassNameBase: string) {
  let res = `export const get${actionClassNameBase}StateData = createSelector(\n`;
  res += indent(`get${actionClassNameBase}State,\n`);
  res += indent(`state => state.data,\n`);
  res += `);\n\n`;

  res += `export const get${actionClassNameBase}StateError = createSelector(\n`;
  res += indent(`get${actionClassNameBase}State,\n`);
  res += indent(`state => state.error,\n`);
  res += `);\n\n`;

  res += `export const get${actionClassNameBase}StateLoading = createSelector(\n`;
  res += indent(`get${actionClassNameBase}State,\n`);
  res += indent(`state => state.loading,\n`);
  res += `);\n\n`;

  return res;
}

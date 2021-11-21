#!/usr/bin/env node
import * as commander from 'commander';

import * as conf from './conf';
import {generate} from './generate';

const program = new commander.Command();

program
  .option('-s, --src <source>', `Source directory, default: ${conf.apiFile}`)
  .option('-d, --dest <destination>', `Destination directory, default: ${conf.outDir}`)
  .option('--no-store', 'Do not generate store')
  .option('-w, --unwrap-single-param-methods',
    'Controller methods with a single parameter get a method_() where the parameter object is unwrapped')
  /* eslint-disable-next-line max-len */
  .option('-u, --swagger-url-path <path>', `swagger URL path, where the swagger ui documentation can be found; default: ${conf.swaggerUrlPath}, i.e. the resulting address would be http://example${conf.swaggerUrlPath}`)
  .option('-o, --omit-version', `Write version info, default: ${conf.omitVersion}`)
  .parse(process.argv);

const options = program.opts();
generate(options.src,
  options.dest,
  options.store,
  options.unwrapSingleParamMethods,
  options.swaggerUrlPath,
  options.omitVersion);

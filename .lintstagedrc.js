import { relative } from 'path';
import process from 'process';

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => relative(process.cwd(), f)).join(' --file ')}`;

const lintStagedConfig = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand]
};

export default lintStagedConfig;

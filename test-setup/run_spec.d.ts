import type { PrettierOptions } from '../src/types';

declare global {
  function run_spec(dirname: string, parsers: string[], options: Partial<PrettierOptions>): void;
}

export type RunSpecFn = typeof run_spec;

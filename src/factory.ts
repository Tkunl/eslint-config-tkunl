import type { FlatESLintConfig } from "./interface";
import { imports } from "./rules/imports";
import { javascript } from "./rules/javascript";
import { typescript } from "./rules/typescript";

export interface TkunlESLintConfigOptions {
  typescript?: boolean;
}

export function genEslintCfg(
  opt: TkunlESLintConfigOptions = {},
  ...userOptions: FlatESLintConfig[]
) {
  const { typescript: ts = true } = opt;
  const configs = [javascript(), imports()];
  if (ts) {
    configs.push(typescript());
  }

  configs.push(userOptions);
  return configs.flat();
}

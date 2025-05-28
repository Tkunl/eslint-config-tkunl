import { configs } from "typescript-eslint";
import type { FlatESLintConfig } from "../interface";
import { GLOB_TS, GLOB_TSX } from "src/constants";

// TODO 以下的先抄上, 后面再补注释
export function typescript() {
  const confg: FlatESLintConfig[] = [
    {
      name: "@tkunl/typescript",
      files: [GLOB_TS, GLOB_TSX],
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      plugins: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(configs.base.plugins as any),
      },
      languageOptions: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
        parser: configs.base.languageOptions!.parser as any,
        sourceType: "module",
        parserOptions: {
          projectService: true,
          warnOnUnsupportedTypeScriptVersion: true,
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      rules: {
        ...configs.base.rules,
        ...configs.recommendedTypeChecked.reduce<typeof configs.base.rules>(
          (acc, cur) => ({ ...acc, ...cur.rules }),
          {}
        ),
      },
    },
    {
      name: "@tkunl/dts",
      files: ["**/*.d.ts"],
    },
  ];

  return confg;
}

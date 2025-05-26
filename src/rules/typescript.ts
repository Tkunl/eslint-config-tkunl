import { browser, es2025, node } from "globals/globals.json";
import type { FlatESLintConfig } from "../interface";

export function typeScript() {
  const confg: FlatESLintConfig[] = [
    {
      linterOptions: {
        reportUnusedDisableDirectives: true, // 用于检测未使用禁用指令, 比如使用了 eslint-disable, 但实际上没有在文件中的任何地方生效
      },
    },
    {
      name: "@tkunl/typescript",
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parserOptions: {
          ecmaVersion: "latest",
          sourceType: "module",
          ecmaFeatures: {
            jsx: true,
          },
        },
        globals: {
          ...es2025,
          ...browser,
          ...node,
        },
      },
      rules: {
        'no-var': 'error',
        // 当对象属性的键名与变量名相同时，必须使用简写形式
        'object-shorthand': ['warn', 'properties'],
        // 检查 数组方法回调函数是否正确返回值
        'array-callback-return': ['error', {
          allowImplicit: false,
          checkForEach: false
        }],
        // 强制在控制语句（如 if、for、while 等）中使用大括号 {}
        curly: ['error', 'multi-line'],
        // 确保子类构造函数中正确使用
        'constructor-super': 'error',
        // 强制 default 分支必须位于所有 case 分支之后
        'default-case-last': 'error',
        // 强制使用点号（.）语法访问对象属性 ，除非属性名是保留字或不符合标识符命名规范
        'dot-notation': ['error', { allowKeywords: true }],
        // 用于强制开发者使用 严格相等 运算符, 在比较 null 时允许使用宽松相等
        eqeqeq: ['error', 'always', { null: 'ignore' }],
        // 强制使用 new 调用的函数名必须以大写字母开头
        'new-cap': ['error', { capIsNew: false, newIsCap: true, properties: true }],
        // 禁止使用 Array 构造函数
        'no-array-constructor': 'error',
        // 禁止将 async 函数作为 Promise 构造函数的执行器（executor） 的规则
        'no-async-promise-executor': 'error',
        // 禁止使用 Function.prototype.caller 和 arguments.callee
        'no-caller': 'error',
        // 禁止在 case 分支中声明变量或函数
        'no-case-declarations': 'error',
        // 禁止对类声明（class declaration）进行重新赋值
        'no-class-assign': 'error',
        // 禁止将变量与 -0 进行比较
        'no-compare-neg-zero': 'error',
        // 禁止在条件判断中错误地使用赋值操作符
        'no-cond-assign': 'error',
        // 禁止对使用 const 声明的变量进行重新赋值
        'no-const-assign': 'error',
        // TODO: 没抄完
      }
    },
  ];
}

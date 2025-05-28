const { genEslintCfg } = require("./dist");

module.exports = genEslintCfg({ ts: true, jsx: true, react: true });

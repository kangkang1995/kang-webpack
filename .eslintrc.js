module.exports = {
    parser: "@typescript-eslint/parser",
    env: {
        browser: true,
        es6: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        // "prettier/@typescript-eslint",
        // "plugin:prettier/recommended",
    ],
    // plugins: ["react-hooks","@typescript-eslint"],
    plugins: ["react-hooks"],
    rules: {
        "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
        "react-hooks/exhaustive-deps": "warn", // 检查 effect 的依赖
        "no-var": "error", // 不允许出现var申明
    },
};

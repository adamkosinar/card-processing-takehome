module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["plugin:@typescript-eslint/recommended"],
    plugins: ["@typescript-eslint"],
    rules: {
        "sort-imports": ["error", {
            "ignoreCase": false,
            "ignoreDeclarationSort": true,
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
        }],
        "no-multiple-empty-lines": ["error", {
            "max": 2,
            "maxEOF": 1
        }],
        "no-empty-function": "off",
        "prefer-spread": "off",
        "@typescript-eslint/no-unused-vars": ["off"],
        "@typescript-eslint/ban-ts-comment": ["warn"],
        "@typescript-eslint/no-explicit-any": ["off"],
        "@typescript-eslint/no-empty-function": [ "off"],
        "@typescript-eslint/explicit-function-return-type": ["off"],
        "@typescript-eslint/no-parameter-properties": ["off"],
        "@typescript-eslint/member-ordering": ["error", {"default": ["field", "constructor", "method"]}],
        "comma-dangle": ["error", "never"],
        "no-unused-expressions": ["off"],
        "sort-keys": ["off"],
        "max-len": ["error", {
            "code": 150,
            "tabWidth": 4
        }],
        "object-shorthand": ["off"],
        "radix": ["off"],
        "no-console": ["off"],
        "no-shadow": ["off"],
        "prefer-const": 2,
        "semi": [2, "always"]
    }
};

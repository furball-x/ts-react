module.exports = {
    processors: [],
    extends: ['stylelint-prettier/recommended'],
    rules: {
        indentation: [
            2,
            {
                severity: 'warning',
            },
        ],
        // 取消某些规则如下:
        'unit-case': null,
        'rule-empty-line-before': null,
        'comment-empty-line-before': null,
        'declaration-block-trailing-semicolon': null,
        'selector-type-no-unknown': null,
    },
}

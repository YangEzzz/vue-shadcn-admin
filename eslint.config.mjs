import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'src/components/ui/**',
    // ...globs
  ],
  rules: {
    // 禁用 antfu 的顶层函数规则（与箭头函数规则冲突）
    'antfu/top-level-function': 'off',
    // 强制使用箭头函数
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
    // 禁止使用 function 声明,只允许箭头函数
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    // console 使用警告而不是错误
    'no-console': 'warn',
    // 未使用的变量警告而不是错误
    'no-unused-vars': 'warn',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
})

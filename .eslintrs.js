module.exports = {
	extends: ['next', 'next/core-web-vitals', 'prettier'],
	plugins: ['@typescript-eslint', 'react-hooks', '@tanstack/query'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	rules: {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'@tanstack/query/exhaustive-deps': 'warn',
		'prettier/prettier': 'error'
	}
}

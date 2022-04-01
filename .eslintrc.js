module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'react/react-in-jsx-scope': 0,
		'react/prop-types': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-unused-vars': 0,
		'prettier/prettier': 2,
		'react/jsx-key': 0,
		'no-restricted-imports': [
			'error',
			{
				paths: [
					{
						name: 'styled-components/macro',
						message: 'Please import from styled-components.',
					},
				],
				patterns: ['!styled-components'],
			},
		],
	},
	settings: {
		react: {
			version: '999.999.999',
		},
	},
};

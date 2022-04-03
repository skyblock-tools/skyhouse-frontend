const colors = require('tailwindcss/colors');

module.exports = {
	darkMode: 'class',
	theme: {
		fontFamily: {
			sans: ['InterVariable', 'Inter', 'Helvetica', 'system-ui'],
		},
		extend: {
			colors: {
				sky: colors.sky,
				zinc: colors.zinc,
				neutral: colors.neutral,
			},
		},
	},
	plugins: [],
};

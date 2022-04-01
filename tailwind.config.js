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
			},
		},
	},
	plugins: [],
};

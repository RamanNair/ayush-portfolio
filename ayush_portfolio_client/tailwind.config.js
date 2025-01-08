/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
		extend: {
		  colors: {
			primary: {
				50: '#f8f8fa',
				100: '#f2f1f6',
				200: '#e7e5ef',
				300: '#d5d1e1',
				400: '#bdb6cf',
				500: '#a497bb',
				600: '#9281aa',
				700: '#7e6c95',
				800: '#6a5a7d',
				900: '#574b67',
				950: '#393144',
					},
			secondary: {
			  50: '#f1f8e9',
			  100: '#dcedc8',
			  200: '#c5e1a5',
			  300: '#aed581',
			  400: '#9ccc65',
			  500: '#8bc34a',
			  600: '#7cb342',
			  700: '#689f38',
			  800: '#558b2f',
			  900: '#33691e',
			},
			warn: {
			  50: '#fff8e1',
			  100: '#ffecb3',
			  200: '#ffe082',
			  300: '#ffd54f',
			  400: '#ffca28',
			  500: '#ffc107',
			  600: '#ffb300',
			  700: '#ffa000',
			  800: '#ff8f00',
			  900: '#ff6f00',
			},
			danger: {
			  50: '#ffebee',
			  100: '#ffcdd2',
			  200: '#ef9a9a',
			  300: '#e57373',
			  400: '#ef5350',
			  500: '#f44336',
			  600: '#e53935',
			  700: '#d32f2f',
			  800: '#c62828',
			  900: '#b71c1c',
			},
		  },
		},
	},
	// plugins: [require('daisyui')],
	// daisyui: {
	// 	themes: [
	// 		{
	// 			myLightTheme: {
	// 				primary: '#0d9488',
	// 				'primary-content': '#115e59',
	// 				secondary: '#378d7d',
	// 				'secondary-content': '#cde0ff',
	// 				accent: '#059669',
	// 				'accent-content': '#001000',
	// 				neutral: '#112b40',
	// 				'neutral-content': '#cad0d6',
	// 				'base-100': '#f5feff',
	// 				'base-200': '#d5ddde',
	// 				'base-300': '#b6bdbe',
	// 				'base-content': '#151616',
	// 				info: '#00cfff',
	// 				'info-content': '#001016',
	// 				success: '#00a56e',
	// 				'success-content': '#000a04',
	// 				warning: '#ff7900',
	// 				'warning-content': '#160500',
	// 				error: '#ff0063',
	// 				'error-content': '#160003'
	// 			},
	// 			myDarkTheme: {
	// 				primary: '0d9488',
	// 				'primary-content': '#ccfbf1',
	// 				secondary: '#378d7d',
	// 				'secondary-content': '#160100',
	// 				accent: '#00d9bb',
	// 				'accent-content': '#00110d',
	// 				neutral: '#051106',
	// 				'neutral-content': '#c6c9c6',
	// 				// 'base-100': '#394446', //darkest dark
	// 				// 'base-200': '#255059', //medium dark
	// 				// 'base-300': '#195966', //lightest dark

	// 				'base-100': '#505657', //darkest dark
	// 				'base-200': '#646A6C', //medium dark
	// 				'base-300': '#797F81', //lightest dark

	// 				'base-content': '#cdcfd6',
	// 				info: '#00e5ff',
	// 				'info-content': '#001216',
	// 				success: '#00dda5',
	// 				'success-content': '#00110a',
	// 				warning: '#ff8800',
	// 				'warning-content': '#160600',
	// 				error: '#ff6b75',
	// 				'error-content': '#160405'
	// 			}
	// 		},
	// 		'nord',
	// 		'dark'
	// 	]
	// }
};

import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				// mytheme: {
				// 	primary: '#fec63d',
				// 	secondary: '#facc15',
				// 	accent: '#3b82f6',
				// 	neutral: '#3d4451',
				// 	'base-100': '#ffffff'
				// }
				myLightTheme: {
					primary: '#0d9488',
					'primary-content': '#115e59',
					secondary: '#378d7d',
					'secondary-content': '#cde0ff',
					accent: '#059669',
					'accent-content': '#001000',
					neutral: '#112b40',
					'neutral-content': '#cad0d6',
					'base-100': '#f5feff',
					'base-200': '#d5ddde',
					'base-300': '#b6bdbe',
					'base-content': '#151616',
					info: '#00cfff',
					'info-content': '#001016',
					success: '#00a56e',
					'success-content': '#000a04',
					warning: '#ff7900',
					'warning-content': '#160500',
					error: '#ff0063',
					'error-content': '#160003'
				},
				myDarkTheme: {
					primary: '0d9488',
					'primary-content': '#ccfbf1',
					secondary: '#378d7d',
					'secondary-content': '#160100',
					accent: '#00d9bb',
					'accent-content': '#00110d',
					neutral: '#051106',
					'neutral-content': '#c6c9c6',
					// 'base-100': '#394446', //darkest dark
					// 'base-200': '#255059', //medium dark
					// 'base-300': '#195966', //lightest dark

					'base-100': '#505657', //darkest dark
					'base-200': '#646A6C', //medium dark
					'base-300': '#797F81', //lightest dark

					'base-content': '#cdcfd6',
					info: '#00e5ff',
					'info-content': '#001216',
					success: '#00dda5',
					'success-content': '#00110a',
					warning: '#ff8800',
					'warning-content': '#160600',
					error: '#ff6b75',
					'error-content': '#160405'
				}
			},
			'nord',
			'dark'
		]
	}
};

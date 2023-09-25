/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	/**
	 * Thame settings.
	 * DaisyUI Theme: https://daisyui.com/theme-generator/
	 */
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#05304b',
					secondary: '#0194b7',
					accent: '#0082a1',
					neutral: '#191e1f',
					'base-100': '#ffffff',
					info: '#0194b7',
					success: '#0ca778',
					warning: '#ffce40',
					error: '#e82b4d'
				}
			}
		]
	},
	/**
	 * Base Tailwind plugins and DaisyUI.
	 * DaisyUI: https://daisyui.com/docs/install/
	 * Tailwind: https://tailwindcss.com/docs/plugins
	 */
	plugins: [
		require('daisyui'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/container-queries')
	]
};

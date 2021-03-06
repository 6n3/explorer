const colors = require('tailwindcss/colors')

module.exports = {
	mode: 'jit',
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				blueGray: colors.blueGray,
				gray: colors.gray,
				green: colors.green,
				red: colors.red,
				blue: colors.blue,
				viscoin: {
					blue: {
						1: '#3b9ad5',
						2: '#3d83c5',
						3: '#406bb4'
					}
				},
				vis: {
					purple: {
						1: '#5c3ad5',
						2: '#683dc4',
						3: '#7540b4'
					}
				}
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						'code::before': false,
						'code::after': false,
						code: {
							fontWeight: 400,
							backgroundColor: '#f2f3f5',
							padding: theme('spacing.1'),
							borderRadius: theme('borderRadius.md')
						},
						pre: {
							color: theme('colors.gray.700'),
							backgroundColor: '#f2f3f5'
						},
						a: {
							textDecoration: 'none'
						}
					}
				},
				light: {
					css: [
						{
							color: theme('colors.gray.400'),
							'[class~="lead"]': {
								color: theme('colors.gray.300')
							},
							a: {
								color: theme('colors.blue.300')
							},
							strong: {
								color: theme('colors.white')
							},
							'ol > li::before': {
								color: theme('colors.gray.400')
							},
							'ul > li::before': {
								backgroundColor: theme('colors.gray.600')
							},
							hr: {
								borderColor: theme('colors.gray.200')
							},
							blockquote: {
								color: theme('colors.gray.200'),
								borderLeftColor: theme('colors.gray.600')
							},
							h1: {
								color: theme('colors.white')
							},
							h2: {
								color: theme('colors.white')
							},
							h3: {
								color: theme('colors.white')
							},
							h4: {
								color: theme('colors.white')
							},
							'figure figcaption': {
								color: theme('colors.gray.400')
							},
							'a code': {
								color: theme('colors.white')
							},
							code: {
								color: theme('colors.gray.100'),
								backgroundColor: '#2f3136'
							},
							pre: {
								color: theme('colors.gray.200'),
								backgroundColor: '#2f3136'
							},
							thead: {
								color: theme('colors.white'),
								borderBottomColor: theme('colors.gray.400')
							},
							'tbody tr': {
								borderBottomColor: theme('colors.gray.600')
							}
						}
					]
				}
			})
		}
	},
	variants: {
		extend: {},
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
}
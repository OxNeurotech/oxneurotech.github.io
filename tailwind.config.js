/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				typing: {
					from: { width: '0' },
					to: { width: '100%' }
				},
				'blink-caret': {
					'from, to': { 'border-color': 'transparent' },
					'50%': { 'border-color': 'orange' }
				},
				'slide-in-0': {
					'0%': { transform: 'translateY(-15px)', opacity: '0' },
					'20%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-in-1': {
					'0%': { transform: 'translateY(-15px)', opacity: '0' },
					'15%': { transform: 'translateY(-15px)', opacity: '0' },
					'35%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-in-2': {
					'0%': { transform: 'translateY(-15px)', opacity: '0' },
					'30%': { transform: 'translateY(-15px)', opacity: '0' },
					'50%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-in-3': {
					'0%': { transform: 'translateY(-15px)', opacity: '0' },
					'45%': { transform: 'translateY(-15px)', opacity: '0' },
					'65%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-in-4': {
					'0%': { transform: 'translateY(-15px)', opacity: '0' },
					'60%': { transform: 'translateY(-15px)', opacity: '0' },
					'80%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-in-5': {
					'0%': { transform: 'translateY(-15px)', opacity: '0' },
					'75%': { transform: 'translateY(-15px)', opacity: '0' },
					'95%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-in': {
					'0%': { transform: 'scale(0.8)', 'transform-origin': 'top', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'slide-left': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				}
			},
			animation: {
				typing:
					'typing 4s steps(40, end), blink-caret 0.75s step-end infinite, slide-in-0 1.5s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'slide-in-0': 'slide-in-0 1.5s ease-out',
				'slide-in-1': 'slide-in-1 1.5s ease-out',
				'slide-in-2': 'slide-in-2 1.5s ease-out',
				'slide-in-3': 'slide-in-3 1.5s ease-out',
				'slide-in-4': 'slide-in-4 1.5s ease-out',
				'slide-in-5': 'slide-in-5 1.5s ease-out',
				'slide-left': 'slide-left 1s ease-out',
				'slide-right': 'slide-right 1s ease-out'
			},
			colors: {
				'mint-tulip': {
					50: '#effefa',
					100: '#c8fef3',
					200: '#93fce9',
					300: '#55f3db',
					400: '#22dfc9',
					500: '#09c3b0',
					600: '#049d90',
					700: '#087d75',
					800: '#0c635e',
					900: '#0f524e',
					950: '#013231'
				},
				'blue-zodiac': {
					50: '#91A7E4',
					100: '#809AE0',
					200: '#5F80D9',
					300: '#3E66D1',
					400: '#2D52BA',
					500: '#254499',
					600: '#1D3578',
					700: '#152757',
					800: '#0D1836',
					900: '#050915',
					950: '#010205'
				},
				'gold-leaf': {
					50: '#FFEFCA',
					100: '#EDE1C8',
					200: '#D1C5AC',
					300: '#B5AA92',
					400: '#a69971',
					500: '#9A9078',
					600: '#85754e',
					700: '#655847',
					800: '#56514d',
					900: '#4D4637',
					950: '#3a3a40'
				},
				'coral-blush': {
					50:  '#fff9f9',
					100: '#feeded',
					200: '#fcdbdb',
					300: '#fac4c4',
					400: '#f8a6a6',
					500: '#f68888', // base #F68888
					600: '#dd7a7a',
					700: '#b86666',
					800: '#945252',
					900: '#6f3d3d',
					950: '#4a2929',
				},
				 'pale-sky': {
    				50:  '#fbfdfe',
    				100: '#f2fafd',
					200: '#e6f4fb',
					300: '#d5edf9',
					400: '#c0e4f6',
					500: '#abdbf3', // base #ABDBF3
					600: '#9ac5db',
					700: '#80a4b6',
					800: '#678392',
					900: '#4d636d',
					950: '#334249',
				},
			}
		}
	},
	plugins: []
};

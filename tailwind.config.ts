import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '3rem',
				sm: '3rem',
				lg: '5rem',
			},
		},
		extend: {
			fontSize: {
				xxs: '11px'
			},
			fontFamily: {
				spartan: ['League Spartan']
			}
		}
	}
}